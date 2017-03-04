import JSONPath from 'jsonpath-plus';
import fb from './fb';

const tableau = window.tableau;

export function setup() {
  const myConnector = tableau.makeConnector();

  myConnector.getSchema = (schemaCallback) => {
    const connectionData = JSON.parse(tableau.connectionData);
    window.tableau.log(connectionData);
    schemaCallback([connectionData.schema]);
  };

  myConnector.getData = (table, doneCallback) => {
    const connectionData = JSON.parse(tableau.connectionData);
    const firstPage = connectionData.path;
    window.tableau.log(connectionData);

    const params = Object.assign({
      date_format: 'U',
      limit: 100,
    }, connectionData.params);
    const schema = connectionData.schema;
    const converters = connectionData.converters;

    fb.paginateConnection(firstPage, params, (data, next) => {
      window.tableau.log(`FB Response: ${JSON.stringify(data)}`);
      const tableData = [];
      for (let i = 0; i < data.length; i += 1) {
        const d = data[i];
        tableData.push(schema.columns.reduce((h, c) => {
          return Object.assign(h, { [c.id]: converters[c.id] ? JSONPath({ json: d, path: converters[c.id].path })[0] : d[c.id] });
        }, {}));
      }
      table.appendRows(tableData);

      if (next) {
        next();
      } else {
        doneCallback();
      }
    });
  };

  tableau.registerConnector(myConnector);
}

export function submit(name, json) {
  tableau.connectionName = name;
  tableau.connectionData = json;
  tableau.submit();
}

export const dataTypeEnum = tableau.dataTypeEnum;

export default { setup, submit, dataTypeEnum };

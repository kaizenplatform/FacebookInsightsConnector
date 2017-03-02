import fb from './fb';

const tableau = window.tableau;

const setup = () => {
  const myConnector = tableau.makeConnector();

  myConnector.getSchema = (schemaCallback) => {
    let connectionData = JSON.parse(tableau.connectionData)
    window.tableau.log(connectionData);
    schemaCallback([ connectionData.schema ]);
  };

  myConnector.getData = (table, doneCallback) => {
    let connectionData = JSON.parse(tableau.connectionData)
    let firstPage = connectionData.path
    window.tableau.log(connectionData);

    const params = Object.assign({
      date_format: 'U',
      limit: 100,
    }, connectionData.params);

    fb.paginateConnection(firstPage, params, (data, next) => {
      window.tableau.log("FB Response: " + JSON.stringify(data));
      const tableData = [];
      for (let i = 0; i < data.length; i += 1) {
        tableData.push(data[i]);
      };
      table.appendRows(tableData);

      if (next) {
        next();
      } else {
        doneCallback();
      }
    });
  };

  tableau.registerConnector(myConnector);
};

export default { setup };

const fetch = require('node-fetch');

module.exports  = {
    buscaInstancias : async function() {
        let listInstances = JSON.parse(await (await fetch('http://dev-camunda.fundacred.org.br:8080/engine-rest/process-instance?processDefinitionKey=pp26-atendimento-telefonico')).text());
        return listInstances;
        // instancias.forEach(async (instancia) => {
        //     //let response = await fetch(`http://prod-camunda.fundacred.org.br:8080/engine-rest/process-instance/${instancia}`, {method: 'DELETE'});
        //     console.log(instancia);
        // });
    },
    updateMotivoContato : function (listInstances) {
        for (let i = 0; i < listInstances.length; i++) {
            let idProcess = listInstances[i].id;
            console.log(idProcess);
        }
    }
};
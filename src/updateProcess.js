const fetch = require('node-fetch');
const request = require('request');

module.exports  = {
    buscaInstancias : async function() {
        let listInstances = JSON.parse(await (await fetch('http://dev-camunda.fundacred.org.br:8080/engine-rest/process-instance?processDefinitionKey=pp26-atendimento-telefonico')).text());
        return listInstances;
    },
    updateMotivoContato : function () {
        this.buscaInstancias().then(listInstances =>  {
                console.log(listInstances.length);
                for (let i = 0; i < listInstances.length; i++) {
                    var obj = {
                        "modifications":
                                    {"motivoContato": {"value": "teste-motivo"}},
                        "deletions": [] };
                    request({
                        url: "http://dev-camunda.fundacred.org.br:8080/engine-rest/process-instance/"+listInstances[i].id+"/variables",
                        method: "POST",
                        json: true,   // <--Very important!!!
                        body: obj
                    }, function (error, response){
                        console.log(response);
                        console.log(error);
                    });

                }
            }
        );
    }
};
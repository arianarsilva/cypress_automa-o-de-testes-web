describe('Cadastro de especialista', () => {
    beforeEach (() => {
        cy.fixture('especialistas.json').as('especialistas')
    })
    
    it('Deve realizar cadastro de um especialista via requisição POST', () => {
        cy.get('@especialistas').then((dados) => {
        const especialista = dados.especialistas[0];

        cy.request({
            method: 'POST',
            url: Cypress.env('api_clinica'),
            body: {
                nome: especialista.nome,
                email: especialista.email,
                senha: especialista.senha,
                endereco: {
                    cep: especialista.cep,
                    rua: especialista.rua,
                    numero: especialista.numero,
                    complemento: especialista.complemento,
                    estado: especialista.estado
                }
            },
        }).then ((response) => {
            if(response.status !== 201){
                cy.log(`O status ${response.status} não é o padrão 201`)
            }
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('nome')
            expect(response.body).to.have.property('email')
        })
        })
    })

})


// describe('Testes em Servidor',()=>{
//     beforeEach(() => {
//         cy.fixture('especialistas.json').as('especialistas')
//     })

//     it('Deve realizar cadastro de um especialista via requisição POST em especialistas e retornar 200', ()=>{
//         cy.get('@especialistas').then((dados) => {
//             const especialista = dados.especialistas[0];
//           cy.request({
//             method:'POST',
//             url:Cypress.env('api_clinica'),
//             body: {
//             nome: especialista.nome,
//             email: especialista.email,
//             senha: especialista.senha,
//             endereco:{
//                 cep: especialista.cep,
//                 rua: especialista.rua,
//                 numero:especialista.numero ,
//                 complemento:especialista.complemento ,
//                 estado: especialista.estado
//             }
//         },
           
//         }).then((response) => {
//             if(response.status !== 201){
//                 cy.log(`O status ${response.status} não é o padrão 201`)
//             }
           
//             expect(response.body).to.have.property('id') // Verifica se a resposta possui a propriedade "id"
//             expect(response.body).to.have.property('nome')// Verifica se a resposta possui a propriedade "nome"
//             expect(response.body).to.have.property('email') // Verifica se a propriedade "email" é igual ao valor enviado na requisição
//             })
//         })  
//     })
   
// })

// crie um teste que deve “Realizar cadastro de um especialista via requisição POST” no 
// nosso projeto. Para realizar essa atividade você precisar:

// Consumir a fixture com os dados;
// Verificar se o status code da resposta da API é igual a 201;
// Se a resposta não for 201, envie uma mensagem com o cy.log() informando o status retornado e o esperado;
// Validar se as propriedades ‘id’, ‘nome’ e ‘email’ estão presentes na resposta do servidor.
const Cryptr = require('cryptr');
let key ='holder';
const cryptr = new Cryptr(key);

function encrypt (text){
    const encrypted = cryptr.encrypt(text)
    return encrypted
}

function decrypt(String){
    const decrypted = cryptr.decrypt(String)
    return decrypted
}


const inquirer = require('inquirer')
inquirer
//main choise
.prompt([
    { type :'list',
      message:'make your choise :',
      name:'cipher',
      choices:[
     'encrypt',
     'decrypt'
    ]}
])
    .then(({cipher})=>{
        //encrypt choise
        if(cipher==='encrypt') {
        inquirer
        //key entry
        .prompt([
            {
            type:'input',
            message:'enter your encryption key (must be a non-0-length string) :',
            name:'encryptionKey'
            }
        ])
            .then(({encryptionKey}) =>{
                key=encryptionKey
                inquirer
                //string entry
                .prompt([
                    {
                        type:'input',
                        message:'enter your text:',
                        name:'text'
                    }
                ])
                    .then(({text})=>{
                        const encrypted = encrypt(text)
                        console.log(`your encrypted String: ${encrypted}`)
                    })
            })
        //decrypt choise
        } else{
        inquirer
        //key entry
        .prompt([
            {
            type:'input',
            message:'enter your encryption key (must be a non-0-length string) :',
            name:'encryptionKey'
            }
        ])
            .then(({encryptionKey}) =>{
                key=encryptionKey
                inquirer
                //string entry
                .prompt([
                    {
                        type:'input',
                        message:'enter your encrypted String:',
                        name:'String'
                    }
                ])
                    .then(({String})=>{
                        const decrypted = decrypt(String)
                        console.log(`your decrypted text: ${decrypted}`)
                    })
            })    

        }
    })


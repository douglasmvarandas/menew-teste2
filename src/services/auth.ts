interface User {
  email:string;
  password: string;
}

const users = [
    {
        email: 'example@example.com',
        password: '123456'
    }
]

export async function signIn(user: User): Promise<any> {

    const userObj = users.find(u=>u.email === user.email)
    if(!userObj){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          reject('User not exist')
        }, 2000);
      })
    }

    const response = userObj.password === user.password;
    if(!response){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          reject('Password Incorrect')
        }, 2000);
      })
    }
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve({
          token: '1234n324on345n3213rb1bfouqo34322oub3',
          user: {
            email: userObj.email
          }
        })
      }, 2000);
    })
 
  }
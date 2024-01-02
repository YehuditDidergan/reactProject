// import { observable, makeObservable, action } from 'mobx';

// class PasswordMBX {
//     isLogin =false;
//     isStatus=401;
//     constructor() {
//         makeObservable(this, {
//             isLogin: observable, 
//             isStatus:observable,
//             setIsLogin: action,
//             saveLogin:action,
//         })
//     }
//     setIsLogin = (val) => {
//         this.isLogin = val;
//     }



//      handeleLogin=async () => {
//       console.log('login');
      
//       const response = await fetch("http://localhost:8787/login", {// כתיבה עם fetch
//         method: "POST",
//         body: JSON.stringify({//הופך את האוביקט לstring וככה האוביקט נשלח נכון בfetch
//           name, password// ==={name:name,password:password}
//         }),
//         headers: {
//           "Content-Type": "application/json",//כותרת שתשלח כחלק מהרקווסט ותגדיר שהמשתנים נשלחים וחוזרים במבנה של json
//         },
//       });
//       console.log(response.statusText)
  
//       if (response.status === 200) {
//        SetIsLogin(true)
//       }
//     }
//     // saveLogin=async(name,password)=>{
//     //     console.log("enter save Login")
//     //     console.log(name,password)
//     //     const response = await fetch("http://localhost:8787/login", {
//     //         method: "POST",
            
//     //         body: JSON.stringify({
//     //           name, password
//     //         }),
//     //         headers: {
//     //           "Content-Type": "application/json",
//     //         },
//     //       });
//     //       console.log(response.statusText)
      
//     //       if (response.status === 200) {
//     //         this.isLogin=true;
//     //         this.isStatus=200;
//     //           console.log(this.isLogin)
//     //    }       
  
// // }
// }

// export default new PasswordMBX();
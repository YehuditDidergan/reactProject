import { observable, action, computed, makeAutoObservable, runInAction, makeObservable } from "mobx";
class ServiceMBX {

    listServices = []
    

    constructor() {
        makeObservable(this, {
            listServices: observable,
            addService: action,
            // getServices:action
            // get: computed
        })
        this.baseUrl = 'http://localhost:8787/services'
        this.getServices()
    }
    getServices() {

        console.log("getServices")
        fetch(this.baseUrl,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            console.log(res)
            res.json().then((data) => {
                runInAction(() => {
                    console.log("getServicesData",data)
                    this.listServices = data
                })
            })
        })
    }// getAppointments() {

//     fetch(this.baseUrl).then((res) => {
//         res.json().then((data) => {
//             runInAction(() => {
//                 this.listAppointment = data
//             })
//         })
//     })
// }
   
    addService = async (service) => {

        // console.log("this.listServices0",this.listServices)
        console.log("addService: ",service)
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(service),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.status);
        // console.log("this.listServices1",this.listServices)
        if (response.status === 200) 
        {
         this.listServices.push(service)
            // this.getServices()

        //  console.log("this.listServices2",this.listServices)
        }

    }
    
// addAppointment = async (meeting) => {

//     console.log("meeting: ", meeting)
//     const response = await fetch('http://localhost:8787/appointment', {
//         method: "POST",
//         body: JSON.stringify(meeting),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     console.log(meeting)

//     console.log(response.status);
//     if (response.status === 200) {
//         this.listAppointment.push(meeting)
//         // תשובה לmobx
//         alert("add")
//     }
//     else{
//         alert("not add")
//     }

// }

    // get get(){
    //         return this.listServices;
    //     }
     }
export default new ServiceMBX();



// get get() {
//     return this.listAppointment;
// }
import { observable, action, computed, makeAutoObservable, runInAction, makeObservable } from "mobx";
class AppointmentMBX {
    isAdd = false
    listAppointment = []

    constructor() {
        makeObservable(this, {
            isAdd: observable,
            setIsAdd: action,
            listAppointment: observable,
            addAppointment: action,
        })
        this.baseUrl = 'http://localhost:8787/appointments'
    }
    setIsAdd = (val) => {
        console.log("setIsAdd: ", val)
        this.isAdd = val
    }
    getAppointments() {
        console.log("---start get appointment---")
        fetch(this.baseUrl).then((res) => {
            res.json().then((data) => {
                runInAction(() => {
                    this.listAppointment = ([...data].sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime)));
                })
            })
        })
    }
    addAppointment = async (meeting) => {
        this.isAdd = false;
        console.log("meeting: ", meeting)
        const response = await fetch('http://localhost:8787/appointment', {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            this.setIsAdd(true)
            this.getAppointments();
        }
        else
            this.setIsAdd(false)
    }
}
export default new AppointmentMBX();
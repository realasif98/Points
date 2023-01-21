import { BehaviorSubject } from "rxjs";


export class DevPerformanceService{
    
    subject : BehaviorSubject<string> = new BehaviorSubject<string>("");
    private static _instance : DevPerformanceService;
    private constructor(){ 
    }
    public static getInstance(){
        return this._instance || (this._instance = new this());
    }

    clearSubscription(){
        this.subject.unsubscribe();
    }
}
import { Model } from "mongoose";

interface IRepository {
    findById(id: string): Promise<boolean>;
    create(data: Object): Promise<boolean>;
    remove(id: string, data: Object): Promise<boolean>;
    update(id: string, data: Object): Promise<boolean>;
}

abstract class Repository implements IRepository {
    public model: Model; 

    constructor(model: Model) {
        this.model = model;
    }

    findById(id: string): Promise<boolean> {
        throw new Error('Method not implemented');
    }

    create(data: Object): Promise<boolean> {
        throw new Error('Method not implemented');
    }

    remove(id: string): Promise<boolean> {
        throw new Error('Method not implemented');
    }

    update(id:string, data: Object): Promise<boolean> {
        throw new Error('Method not implemented');
    }
}

export default Repository
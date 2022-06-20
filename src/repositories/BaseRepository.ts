import IBaseRepository from "./interfaces/IBaseRepository";

class BaseRepository implements IBaseRepository {
    create(data: Object): Promise<void> {
        throw new Error('Create method is not implemented');    
    }

    update(data: Object): Promise<void> {
        throw new Error('Update method is not implemented');    
    }

    delete(id: String): Promise<void> {
        throw new Error('Delete method is not implemented');    
    }

    findById(id: String): Promise<void> {
        throw new Error('findById method is not implemented');    
    }
}

export default BaseRepository;
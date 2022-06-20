export default interface IBaseRepository {
    create(data: Object): Promise<void>;
    update(data: Object): Promise<void>;
    delete(id: String): Promise<void>;
    findById(id: String): Promise<void>;
}
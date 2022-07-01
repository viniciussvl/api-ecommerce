import CategoryDto from "../dto/CategoryDto";
import HttpException from "../exceptions/HttpException";
import Category from "../models/Category";

interface CategoryServiceImp {
    getAllCategories(): Promise<Object>;
    getCategory(id: String): Promise<Object>;
    create(data: CategoryDto): Promise<Object>;
    update(id: String, data: CategoryDto): Promise<Object>;
    delete(id: String): Promise<Boolean>;
}

class CategoryService implements CategoryServiceImp {
    async getAllCategories(): Promise<Object> {
        const categories = await Category.find().exec();
        return categories;
    }

    async getCategory(id: String): Promise<Object> {
        const category = await Category.findById(id);
        if(!category) {
            throw new HttpException(404, 'Category not found');
        }

        return category;
    }

    async create(data: CategoryDto): Promise<Object> {
        const category = await Category.create(data);
        return category;
    }

    async update(id: String, data: CategoryDto): Promise<Object> {
        await this.getCategory(id);

        const categoryUpdated = await Category.updateOne({ _id: id }, data);
        if(!categoryUpdated.modifiedCount) {
            throw new HttpException(500, 'internal server error');
        }

        return categoryUpdated;
    }

    async delete(id: String): Promise<Boolean> {
        await this.getCategory(id);

        const deletedCategory = await Category.deleteOne({ _id: id });
        if(!deletedCategory.deletedCount) {
            return false;
        }

        return true;
    }
}

export default CategoryService;
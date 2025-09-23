import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
  name: string;
}

const categoriesToPreLoad: ICategory[] = [
  { name: "Rock" },
  { name: "Pop" },
  { name: "Soul/R&B" },
  { name: "Hard Rock" },
  { name: "Alternative Rock" },
  { name: "Hip Hop" },
  { name: "Folk" },
  { name: "Jazz" },
  { name: "Electronic" },
];

export const preLoadCategories = async () => {
  const categories = await CategoryRepository.find();
  if (!categories.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Category)
      .values(categoriesToPreLoad)
      .execute();
  console.log("Categories preloaded");
};

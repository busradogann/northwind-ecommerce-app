import { ListGroup, ListGroupItem } from "reactstrap";
import { useEffect, useState } from "react";
import { Categories, Category } from "../types/models";
import { getCategories as fetchCategories } from "../services/category.service";


const CategoryList = (props: Categories) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((data: any) => setCategories(data));
  }, []);

  return (
    <div>
      <h5 className="mb-3 fw-bold text-info px-2">
        {props.info.title}
      </h5>
      <ListGroup flush>
        {categories.map(category => (
          <ListGroupItem 
            action
            active={category.name === props.currentCategory}
            onClick={() => props.changeCategory(category)} 
            key={category.id}
            className="border-0 py-2 cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <span className={category.name === props.currentCategory ? 'fw-bold' : ''}>
                {category.name}
              </span>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;

import { mountRemoteComponent } from "@/utils/loadComponent";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return mountRemoteComponent({
    module: "product", component: "ProductView", props: {
      navigate,
      searchParams: {
        categoryId: Number(searchParams.get('category'))
      }
    }
  });
};

export default Shop;

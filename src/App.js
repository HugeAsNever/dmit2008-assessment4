import {Route, Routes} from 'react-router-dom';
import {DashBoardPage, PageNotFound, LoginPage} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddProductPanel, AllProductsPanel, EditProductPanel } from 'components/panels';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='dashboard' element={<DashBoardPage />} >
          <Route index element={<AllProductsPanel title="All Products" />}/>
          <Route path="add" element={<AddProductPanel title="Add New Product" />}/>
          <Route path="edit" element={<EditProductPanel title="Edit Current Product" />}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

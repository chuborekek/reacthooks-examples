import { Link,Routes,Route } from "react-router-dom";
import UseStateSample from './pages/UseStateSample';
import UseEffectSample from './pages/UseEffectSample';
import UseCallbackSample from "./pages/UseCallbackSample/UseCallbackSample";
import UseContextSample from "./pages/UseContextSample/UseContextSample";
import UseDebugValueSample from "./pages/UseDebugValueSample";
import UseDeferredValueSample from "./pages/UseDeferredValueSample/UseDeferredValueSample";
import UseIdSample from "./pages/UseIdSample";
import UseLayoutEffectSample from "./pages/UseLayoutEffectSample";
import UseMemoSample from "./pages/UseMemoSample";
import UseReducerSample from "./pages/UseReducerSample/UseReducerSample";
import UseRefSample from "./pages/UseRefSample";
import UseTransitionSample from "./pages/UseTransitionSample";
import Page404 from "./pages/Page404";
import Book from "./pages/Routing/Book";
import NewBook from "./pages/Routing/NewBook";
import BookLayout from "./pages/Routing/BookLayout";
import UseSearchParamsSample from "./pages/UseSearchParamsSample";

// import UseEffectSample from './pages/UseEffectSample';
function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li> <Link to="/useState">useState Hook</Link></li>
          <li> <Link to="/useEffect">useEffect Hook</Link></li>
          <li> <Link to="/useContext">useContext Hook</Link></li>
          <li> <Link to="/useRef">useRef Hook</Link></li>
          <li> <Link to="/useMemo">useMemo Hook</Link></li>
          <li> <Link to="/useCallback">useCallback Hook</Link></li>
          <li> <Link to="/useReducer">useReducer Hook</Link></li>
          <li> <Link to="/useTransition">useTransition Hook</Link></li>
          <li> <Link to="/useDeferredValue">useDeferred Hook</Link></li>
          <li> <Link to="/useLayoutEffect">useLayoutEffect Hook</Link></li>
          <li> <Link to="/useDebugValue">useDebugValue Hook</Link></li>
          <li> <Link to="/useId">useId Hook</Link></li>
          <li> <Link to="/useSearchParams/?lang=en&page=3">useSearchParams Hook</Link></li>
          <li> <Link to="/book">Routes that have nested route</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>React Hooks Examples</h1>}/>
        <Route path="/useState" element={<UseStateSample/>}/>
        <Route path="/useEffect" element={<UseEffectSample/> }/>
        <Route path="/useContext" element={<UseContextSample/> }/>
        <Route path="/useRef" element={<UseRefSample/> }/>
        <Route path="/useMemo" element={<UseMemoSample/> }/>
        <Route path="/useCallback" element={<UseCallbackSample/> }/>
        <Route path="/useReducer" element={<UseReducerSample/> }/>
        <Route path="/useTransition" element={<UseTransitionSample /> }/>
        <Route path="/useDeferredValue" element={<UseDeferredValueSample/> }/>
        <Route path="/useLayoutEffect" element={<UseLayoutEffectSample/> }/>
        <Route path="/useDebugValue" element={<UseDebugValueSample/> }/>
        <Route path="/useId" element={<UseIdSample/> }/>
        <Route path="/useSearchParams" element={<UseSearchParamsSample/> }/>
        {/* This route is an example of nesting route with layout and using Outlet*/}
        <Route path="/book" element={<BookLayout/>}>
           <Route path="/book/:bookid" element={<Book />}/> {/*example of having parameter in URL */}
            <Route path="/book/newbook" element={<NewBook/>}/>
        </Route>
        {/* This route is used for pages that are not found */}
        <Route path="*" element={<Page404 />}/> {/*Page404 is an example using useNavigate, it will redirect to another page automatically */}
        </Routes>
    </div>
  );
}

export default App;

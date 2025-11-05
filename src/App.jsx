import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Toaster} from '@/components/ui/toaster'; 
import {ToastProvider} from '@/components/ui/use-toast'; 

function App() {
  return (
    <ToastProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path = "*" element = {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
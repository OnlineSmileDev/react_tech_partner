import Sidebar from "../../components/sidebar";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div class="flex w-full bg-red-100 p-4">
      <Sidebar navigate={navigate} />
      <div class="flex w-full flex-col">
        <div class="flex bg-yellow-400">
          AAA
        </div>
        <div class="flex bg-blue-200">
          BBB
        </div>
      </div>
    </div>
  )
}

export default Home;
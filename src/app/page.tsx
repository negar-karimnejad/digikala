import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

function Home() {
  return (
    <Container>
      <div className="h-96 bg-contain  bg-green-500 px-4 bg-no-repeat bg-[url('data:image/jpeg;base64,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')]">
        <div className="p-5 rounded-md relative w-full flex items-center justify-center h-20">
          <div className="text-white font-bold text-xl bg-gray-500 mt-20 flex items-center justify-center w-fit h-full absolute top-0 right-0">
            Featured Products
            <Button>sss</Button>
          </div>
        </div>
      </div>
      <Products />
    </Container>
  );
}

export default Home;

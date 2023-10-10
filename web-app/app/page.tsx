import InvalidateCache from "@/components/InvalidateCache";

const App = () => {
  return (
    <div>
      <InvalidateCache gotoCaching={() => console.log("Caching")} gotoTraficManagement={() => console.log("TraficManagement")}/>
    </div>
  )
}

export default App;

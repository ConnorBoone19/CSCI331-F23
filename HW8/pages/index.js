import CounterButton from "./counter"
function Page(){
    
    
    return (
        <div>
           <h1>Hello World</h1> 
           <CounterButton incrementBy={1}/>
           <CounterButton incrementBy={2}/>
        </div>
    
        
    );
}
export default Page;

// npm run dev
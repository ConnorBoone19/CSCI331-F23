import CounterButton from "./counter"
import MyStoreFront from "./storefront"
function Page(){
    
    
    return (
        <div>
           <h1>Hello World</h1> 
           <CounterButton incrementBy={1}/>
           <CounterButton incrementBy={2}/>
           <a href="https://github.com/ConnorBoone19/CSCI331-F23">My github</a>
           
           <MyStoreFront/>
        </div>
    
        
    );
}
export default Page;

// npm run dev
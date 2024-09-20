// ReactDOM.render(<App />,document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <App/>
// )
// why we use React Example ?
function Main()
{
    const [count,SetCount] = React.useState(0);
    

    return (
        <div>
              <h1 >{count}</h1>
              <button onClick={()=>SetCount(count+1)}>Add button</button>

        </div>
    )
}
ReactDOM.render(
    <div>
        <Main />
        <Main />
        <Main />
    </div>
    ,document.getElementById("root"));


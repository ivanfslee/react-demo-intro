

function App () {
    let cards = data.map((course, i)=> {
        return <Card key={i} data={course} />
    })

    console.log(cards);

    return (
        <div className="row">
            {cards}

            {/* <Card course={data[0].course} instructor={data[0].instructor} image={data[0].image} />
            <Card course={data[1].course} instructor={data[1].instructor} image={data[1].image} />
            <Card course={data[2].course} instructor={data[2].instructor} image={data[2].image} />
            <Card course={data[3].course} instructor={data[3].instructor} image={data[3].image} /> */}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
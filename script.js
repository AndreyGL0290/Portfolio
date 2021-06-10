const info = [
    {path: 'images/art.png', text:'порисовать',tryIt:'https://andreygl0290.github.io/art/', source:'https://github.com/AndreyGL0290/art'},
    {path: 'images/graphs.png', text:'построить пару графиков',tryIt:'https://github.com/AndreyGL0290/Graphs-and-charts-app', source:'https://github.com/AndreyGL0290/Graphs-and-charts-app'},
    {path: 'images/ping_pong.png', text:'поиграть в теннис',tryIt:'https://andreygl0290.github.io/Ping-pong-comp-smrt/', source:'https://github.com/AndreyGL0290/Ping-pong-comp-smrt'},
    {path: 'images/music.png', text:'послушать музыку',tryIt:'https://andreygl0290.github.io/Music-for-coding/', source:'https://github.com/AndreyGL0290/Music-for-coding'},
    {path: 'images/graphs.png', text:'построить пару графиков',tryIt:'https://github.com/AndreyGL0290/Graphs-and-charts-app', source:'https://github.com/AndreyGL0290/Graphs-and-charts-app'},
    {path: 'images/ping_pong.png', text:'поиграть в теннис',tryIt:'https://andreygl0290.github.io/Ping-pong-comp-smrt/', source:'https://github.com/AndreyGL0290/Ping-pong-comp-smrt'}];

function Card(props){
    return (
        <div className="content">
            <div className="image_container">
                <img src={props.game.path} alt="Тут должна быть Preview'шка" />
            </div>
            <div className="text_content">
                <p>{props.game.text}</p>
                <a id='try_button' className="button" href={props.game.tryIt} target='_blank'>Опробовать</a>
                <a className="button" href={props.game.source} target='_blank'>Код</a>
            </div>
        </div>
    )
}

const app = (
    <div>
        <div className='content_conteiner'>
            <Card game={info[0]}/>
            <Card game={info[1]}/>
            <Card game={info[2]}/>
        </div>
        <div className='content_conteiner'>
            <Card game={info[3]}/>
            <Card game={info[4]}/>
            <Card game={info[5]}/>
        </div>
    </div>
)

ReactDOM.render(app, document.getElementById('root'));

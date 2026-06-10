import './App.css';
import Card from './components/Card';

const msg_events = [
    {id: 1, title: "NBA Finals: San Antonio Spurs vs New York Knicks", date: "Wednesday June 10, 2026 @ 8:30pm", description: "NBA Finals Home Game!", ticketUrl: "https://gotickets.com/tickets/1459347/nba-finals-san-antonio-spurs-at-new-york-knicks-home-game-2-series-game-4-tickets/madison-square-garden-new-york-ny-6-10-2026?orderBy=Price%3A+Low+to+High&quantity=2"},
    {id: 2, title: "Forrest Frank", date: "Thursday June 11, 2026 @ 7pm", description: "Forrest Frank delivers an uplifting night of Christian music and inspiration at MSG.", ticketUrl: "https://gotickets.com/tickets/1357981/forrest-frank-rescheduled-from-6-10-tickets/madison-square-garden-new-york-ny-6-11-2026?orderBy=Price%3A+Low+to+High&quantity=2"},
    {id: 3, title: "5 Seconds of Summer", date: "Sunday June 14, 2026 @ 8:00p", description: "5 Seconds of Summer brings their chart-topping pop-rock hits to MSG.", ticketUrl: "https://gotickets.com/tickets/1275765/5-seconds-of-summer-tickets/madison-square-garden-new-york-ny-6-13-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 4, title: "Rosalia", date: "Wednesday June 17, 2026 @ 8:00p", description: "Rosalía brings her innovative blend of flamenco, pop, and reggaeton to MSG.", ticketUrl: "https://gotickets.com/tickets/1360231/rosalia-tickets/madison-square-garden-new-york-ny-6-17-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 5, title: "Goose", date: "Friday June 19, 2026 @ 7:29p", description: "Two-day pass for Goose as they bring their signature blend of improvisational rock and jam-band energy to MSG.", ticketUrl: "https://gotickets.com/tickets/1410362/goose-2-day-pass-6-19-6-20-tickets/madison-square-garden-new-york-ny-6-19-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 6, title: "Carin Leon", date: "Monday June 22, 2026 @ 8:00p", description: "Carín León brings his award-winning blend of regional Mexican music to MSG.", ticketUrl: "https://gotickets.com/tickets/1551037/carin-leon-tickets/madison-square-garden-new-york-ny-6-22-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 7, title: "Bleachers", date: "Tuesday June 23, 2026 @ 7:30p", description: "Bleachers bring their indie pop sound to MSG..", ticketUrl: "https://gotickets.com/tickets/1502423/bleachers-tickets/madison-square-garden-new-york-ny-6-23-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 8, title: "Rufus Du Sol", date: "Thursday June 25, 2026 @ 7:30p", description: "Join RÜFÜS DU SOL for an unforgettable evening of electronic music and visual artistry", ticketUrl: "https://gotickets.com/tickets/1462609/rufus-du-sol-tickets/madison-square-garden-new-york-ny-6-25-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 9, title: "Bon Jovi", date: "Tuesday July 7, 2026 @ 7:30p", description: "Bon Jovi brings their legendary rock hits to MSG..", ticketUrl: "https://gotickets.com/tickets/1274234/bon-jovi-tickets/madison-square-garden-new-york-ny-7-7-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
    {id: 10, title: "Louis Tomlinson", date: "Wednesday July 8, 2026 @ 7:00p", description: "Louis Tomlinson brings his heartfelt pop-rock sound and fan-favorite hits to MSG.", ticketUrl: "https://gotickets.com/tickets/1242933/louis-tomlinson-tickets/madison-square-garden-new-york-ny-7-8-2026?orderBy=Price%3A+Low+to+High&quantity=1"},
]

const App = () => {

  return (
    <div className="App">
        <div>
            <img className='skyline' src='NYCSkyline.jpg'></img>
        </div>

        <h1 className='text'>Madison Square Garden</h1>
        <h2 className='text'>Upcoming Events</h2>

        <div className="card-list">
        {msg_events.map((event) => (
          <Card
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            ticketUrl={event.ticketUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default App
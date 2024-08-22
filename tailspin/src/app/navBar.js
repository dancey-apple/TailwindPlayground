

export default function NavBar() {
    return (
        <nav className='flex justify-between shadow-lg shadow-violet-950 mb-2.5'>
            <button className='hover:drop-shadow-3xl text-3xl p-2.5'>Bounty Board</button>
            <button href='./notifictions.js' className='hover:drop-shadow-3xl text-3xl p-2.5'>Notifications Tester</button>
            <button className='hover:drop-shadow-3xl text-3xl p-2.5'>My Stats</button>
        </nav>
    );
    }
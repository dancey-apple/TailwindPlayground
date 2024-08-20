
export default function NavBar() {
    return (
        <nav className='flex justify-between'>
            <button className='hover:drop-shadow-3xl text-3xl p-2.5'>Bounty Board</button>
            <button className='hover:drop-shadow-3xl text-3xl p-2.5'>My Quests</button>
            <button className='hover:drop-shadow-3xl text-3xl p-2.5'>My Stats</button>
        </nav>
    );
    }
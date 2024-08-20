export default function QuestCards() {
    return (
        <div className='grid grid-cols-1 gap-4'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="././img/RPGCharacter.png" alt="Character Avatar"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Create a Character</div>
                        <p class="text-gray-700 text-base">THIS IS WHERE YOU WILL WRITE A DESCRIPTION OF THE QUEST</p>
                    </div>
                <div class="px-6 pt-4 pb-2">
                </div>
            </div>
        </div>
    );
}
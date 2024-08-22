"use client";

import React, { useState } from 'react';
import NotificationModal from './notifications';

const QuestCards = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    }

    return (  
        <div className='grid grid-cols-4 gap-4'>
            <div class="max-w-sm rounded overflow-hidden shadow-2xl rounded-xl hover:max-w-md bg-slate-500">
                <img class="w-full rounded-3xl" src="https://github.com/dancey-apple/TailwindPlayground/blob/main/tailspin/src/img/RPGCharacter.png?raw=true" alt="Character Avatar"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Create a Character</div>
                        <p class="text-gray-700 text-base">THIS IS WHERE YOU WILL WRITE A DESCRIPTION OF THE QUEST</p>
                        <button class="bg-violet-400 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full mt-4">Accept Quest</button>
                    </div>
                <div class="px-6 pt-4 pb-2">
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-2xl rounded-xl hover:max-w-md bg-slate-500">
                <img class="w-full rounded-3xl" src="https://github.com/dancey-apple/TailwindPlayground/blob/main/tailspin/src/img/dwarf.png?raw=true" alt="Character Avatar"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Find a Quest</div>
                        <p class="text-gray-700 text-base">THIS IS WHERE YOU WILL WRITE A DESCRIPTION OF THE QUEST</p>
                        <button class="bg-violet-400 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full mt-4">Accept Quest</button>
                    </div>
                <div class="px-6 pt-4 pb-2">
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-2xl rounded-xl hover:max-w-md bg-slate-500">
                <img class="w-full rounded-3xl" src="https://github.com/dancey-apple/TailwindPlayground/blob/main/tailspin/src/img/Quest.png?raw=true" alt="Character Avatar"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">BE PRODUCTIVE!</div>
                        <p class="text-gray-700 text-base">THIS IS WHERE YOU WILL WRITE A DESCRIPTION OF THE QUEST</p>
                        <button class="bg-violet-400 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full mt-4">Accept Quest</button>
                    </div>
                <div class="px-6 pt-4 pb-2">
                </div>
            </div>
            <div id='notification-tester'>
                <button onClick={showModal} className='hover:drop-shadow-3xl text-3xl p-2.5 bg-violet-400 rounded-full'>Notifications Tester</button>
                {showModal && <NotificationModal closeModal={closeModal} />}
            </div>
        </div>
    );
}

export default QuestCards;
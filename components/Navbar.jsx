

const NavButton = ({text})=>{
    return (
        <div className="text-2xl px-8 py-4 relative cursor-pointer hover:text-blue-300">
            <div className="absolute left-0 bottom-2.5 h-1.5 w-full flex justify-center">
                <div className="bg-purple-500 w-2 rounded-full h-full"></div>
            </div>
            {text}
        </div>
    )
}

const NavBar = ()=>{
    const navs = [
        {
            'name':'Recents',
            'route':'/recents'
        },
        {
            'name':'Map',
            'route':'/home'
        },
        {
            'name':'Profile',
            'route':'/profile'
        },
    ]
    return (
        <div className="h-28 w-full p-4 fixed bottom-0 left-0">
            <div className="flex justify-center rounded">
                <div className="rounded-xl bg-green-500 flex">
                    {
                        navs.map((nav)=>(
                            <NavButton key={nav.route} text={nav.name}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar;
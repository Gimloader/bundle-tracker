import {
    j as e,
    e as b,
    l as M,
    r as h,
    T as D,
    F as k,
    d as a,
    ah as R,
    S as F,
    U as E,
    B as H,
    a as I,
    u as V,
    t as U
} from "./_index.js";
import {
    a as N,
    C as Y
} from "./Centered.js";
import {
    G as A
} from "./GetAssetPath.js";
import {
    T as r,
    A as y,
    E as q,
    S as z
} from "./ActionButton.js";
import {
    D as s
} from "./TutorialConsts.js";
import {
    F as w
} from "./FontAwesomeIcon.js";
import {
    M as T
} from "./Button.js";
import {
    A as Q
} from "./AnimatedBackground-1.js";
import {
    P as $
} from "./progress.js";
import "./index-5.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./CheckOutlined.js";
const o = t => t.event === r.NEXT,
    n = t => e.jsx("span", {
        style: {
            fontWeight: "bold",
            color: "#ffff94"
        },
        children: t.children
    }),
    i = () => e.jsx(e.Fragment, {
        children: e.jsx("br", {})
    }),
    x = {
        steps: [{
            text: e.jsxs("div", {
                children: ["Hey there! Welcome to ", e.jsx(n, {
                    children: "Gimkit Creative"
                }), ", a tool which you can use to build your own maps, game modes, and more!"]
            }),
            cb: o
        }, {
            text: e.jsxs("div", {
                children: ["I’ll be here to show you the basics of Gimkit Creative.", e.jsx("br", {}), "Once you get the basics down, you'll be able to build all sorts of maps & games!"]
            }),
            cb: o
        }, {
            text: "Let's chat about the game you're going to build today!",
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["In this game, there will be an ", e.jsx(n, {
                    children: "enemy you have to knockout"
                }), " ", "to win the game!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["However, you're going to start with ", e.jsx(n, {
                    children: "nothing"
                }), " in your inventory! ", e.jsx(i, {}), "You'll have to answer a question correctly to earn a Snowball Launcher."]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Once you have that Snowball Launcher, you can use it to", " ", e.jsx(n, {
                    children: "knockout the enemy!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["To recap, in your game, you will...", e.jsxs("ol", {
                    style: {
                        marginTop: 10
                    },
                    children: [e.jsx("li", {
                        children: "Answer a question correctly"
                    }), e.jsx("li", {
                        children: "Earn a Snowball Launcher"
                    }), e.jsx("li", {
                        children: "Knockout the enemy with the Snowball Launcher"
                    })]
                })]
            }),
            cb: o
        }, {
            text: "You ready? Let’s get building!",
            cb: o
        }, {
            text: e.jsxs("div", {
                children: [e.jsx(n, {
                    children: "To add anything to your map"
                }), ", click the", " ", e.jsx("div", {
                    style: {
                        display: "inline-block",
                        margin: 10
                    },
                    children: e.jsx(y, {
                        tooltip: "",
                        onClick: () => !1,
                        children: e.jsx(w, {
                            name: "fas fa-plus"
                        })
                    })
                }), " ", "button on the top right! Go ahead and click it now!"]
            }),
            cb: t => t.event === r.OPEN_ADD_MENU
        }, {
            text: e.jsxs("div", {
                children: ["Nice! This is the ", e.jsx(n, {
                    children: "Add Menu"
                }), ", which is where you’ll go to add things to your map. ", e.jsx(i, {}), "Terrain, Props, Devices, and Wires are all things you can add to your map. Let’s start by selecting ", e.jsx(n, {
                    children: "Terrain"
                }), "."]
            }),
            cb: t => t.event === r.OPEN_ADD_SUBMENU && t.menu === "terrain"
        }, {
            text: e.jsxs("div", {
                children: [e.jsx(n, {
                    children: "Terrain are the floors and walls of your map."
                }), " As you can see, there are many different options to choose from! ", e.jsx(i, {}), " Since this game will have the player using a Snowball Launcher, let’s add some snow! Select the ", e.jsx(n, {
                    children: "Snow"
                }), " terrain."]
            }),
            cb: t => t.event === r.SELECT_TERRAIN_TO_ADD && t.terrainId === "Snow"
        }, {
            text: e.jsxs("div", {
                children: ["Awesome! You have the Snow Terrain selected, and you can start", " ", e.jsx(n, {
                    children: "clicking to place it anywhere on the map!"
                }), " ", e.jsx(i, {}), " Go ahead and place a bunch of snow on the map and", " ", e.jsx(n, {
                    children: "click the Next Button when you’re done!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Looking good! But…our map is looking a little empty. That is where", " ", e.jsx(n, {
                    children: "props"
                }), " come in!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "Props are objects you can place on your map for decoration."
                }), " ", "Things like trees, tables, and chairs.", " ", e.jsx(n, {
                    children: "Let’s add some trees to liven things up!"
                }), e.jsx(i, {}), " ", e.jsx(i, {}), "If you haven’t yet, close out of the terrain adding screen by clicking the ", e.jsx(n, {
                    children: "X"
                }), " button.", e.jsx(i, {}), "From there, open up the add menu again by clicking", " ", e.jsx("div", {
                    style: {
                        display: "inline-block",
                        margin: 10
                    },
                    children: e.jsx(y, {
                        tooltip: "",
                        onClick: () => !1,
                        children: e.jsx(w, {
                            name: "fas fa-plus"
                        })
                    })
                }), " ", "on the top right!"]
            }),
            cb: t => t.event === r.OPEN_ADD_MENU
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["And now, select ", e.jsx(n, {
                    children: "Props"
                }), "!"]
            }),
            cb: t => t.event === r.OPEN_ADD_SUBMENU && t.menu === "props"
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Here you can find all the props available to use! ", e.jsx(i, {}), e.jsx(n, {
                    children: "Select one of the trees"
                }), " to begin adding it to the map!"]
            }),
            cb: t => t.event === r.SELECT_PROP_TO_ADD && t.propId.toLocaleLowerCase().includes("tree")
        }, {
            text: "Just click to place the tree down on your map!",
            cb: t => t.event === r.PLACE_DEVICE_DOWN && t.device.deviceOption.id === s.prop && t.device.options.propId.toLocaleLowerCase().includes("tree")
        }, {
            text: e.jsxs("div", {
                children: ["Nice! But one tree isn’t enough. Let’s add another one. ", e.jsx(i, {}), " ", e.jsx(i, {}), "To make things quicker, you can hover your mouse over the tree and then press", " ", e.jsx("span", {
                    style: {
                        color: b.Black,
                        background: b.White,
                        padding: "4px 8px",
                        borderRadius: 4,
                        margin: 4
                    },
                    children: "C"
                }), " ", "on your keyboard (C for copy). Try that now!"]
            }),
            cb: t => t.event === r.START_COPY_DEVICE && t.device.deviceOption.id === s.prop && t.device.options.propId.toLocaleLowerCase().includes("tree")
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Perfect! Now go place as many trees on your map as you would like, and then click the ", e.jsx(n, {
                    children: "Next Button"
                }), " when you’re ready!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Awesome work. Terrain and props are how you get your map to look exactly how you want it to! ", e.jsx(i, {}), "But, how do you actually make this map…a game? That is where", " ", e.jsx(n, {
                    children: "Devices"
                }), " come in!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "Devices are how game mechanics are built."
                }), " Each device is responsible for a small part of your gameplay.", e.jsx(i, {}), " ", e.jsx(i, {}), "For example, the ", e.jsx(n, {
                    children: "Spawn Pad device"
                }), " is responsible for setting the location of players when your game begins. ", e.jsx(i, {}), " ", e.jsx(i, {}), "The ", e.jsx(n, {
                    children: "Teleporter device"
                }), " is responsible for teleporting a player from one place to another!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Let’s start off by placing our first device. Click the", " ", e.jsx("div", {
                    style: {
                        display: "inline-block",
                        margin: 10
                    },
                    children: e.jsx(y, {
                        tooltip: "",
                        onClick: () => !1,
                        children: e.jsx(w, {
                            name: "fas fa-plus"
                        })
                    })
                }), " ", "button on the top right to open the add menu, and then select", " ", e.jsx(n, {
                    children: "Devices"
                }), "."]
            }),
            cb: t => t.event === r.OPEN_ADD_SUBMENU && t.menu === "devices"
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Here are all the devices you can place! It might look like a lot, but each device typically does just one small task. ", e.jsx(i, {}), "Select the ", e.jsx(n, {
                    children: "Spawn Pad"
                }), " device."]
            }),
            cb: t => t.event === r.SELECT_DEVICE_TO_ADD && t.deviceTypeId === s.characterSpawnPad
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "Click to place the Spawn Pad device anywhere"
                }), ". That is where you will spawn once the game begins!"]
            }),
            cb: t => t.event === r.PLACE_DEVICE_DOWN && t.device.deviceOption.id === s.characterSpawnPad
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Perfect. Now…what should we add in next? How about a way for players to answer multiple-choice questions, like in normal Gimkit modes?", e.jsx(i, {}), e.jsx(i, {}), " Open the ", e.jsx(n, {
                    children: "Add Menu"
                }), ", select ", e.jsx(n, {
                    children: "Devices"
                }), ", and then select the ", e.jsx(n, {
                    children: "Questioner"
                }), " device."]
            }),
            cb: t => t.event === r.SELECT_DEVICE_TO_ADD && t.deviceTypeId === s.gimkitLiveQuestion
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["With this device,", " ", e.jsx(n, {
                    children: "players will be able to walk up to it and start answering multiple choice questions!"
                }), " ", "Place it next to the Spawn Pad so that players won’t have to walk far to start answering."]
            }),
            cb: t => t.event === r.PLACE_DEVICE_DOWN && t.device.deviceOption.id === s.gimkitLiveQuestion
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Nice work. At this point, you’ve added a lot. Let's test your game to make sure everything works properly. ", e.jsx(i, {}), e.jsx(i, {}), "You’re currently in editing mode, but you can quickly jump into a game by clicking the", " ", e.jsx("div", {
                    style: {
                        display: "inline-block",
                        margin: 10
                    },
                    children: e.jsx(y, {
                        tooltip: "",
                        onClick: () => !1,
                        children: e.jsx(w, {
                            name: "fas fa-play"
                        })
                    })
                }), " ", "button on the bottom right.", " ", e.jsx(n, {
                    children: "Click that button and start the game!"
                })]
            }),
            cb: t => t.event === r.START_THE_GAME
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Now you’re in-game! This is what players will experience when they play your map! ", e.jsx(i, {}), "Walk over to the Questioner Device you placed and", " ", e.jsx(n, {
                    children: "answer a question!"
                })]
            }),
            cb: t => t.event === r.ANSWER_A_QUESTION
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Woohoo! Everything works! ", e.jsx(i, {}), "Let’s go back to editing and finishing up our game. Close out of this screen and end the game by clicking", " ", e.jsx("div", {
                    style: {
                        display: "inline-block",
                        margin: 10
                    },
                    children: e.jsx(T, {
                        type: "danger",
                        onClick: () => !1,
                        customHorizontalPadding: 18,
                        ariaLabel: "Stop",
                        children: e.jsx("i", {
                            className: "far fa-stop-circle"
                        })
                    })
                }), " ", "on the top right."]
            }),
            cb: t => t.event === r.END_THE_GAME
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["And now you can head back into editing mode by clicking", " ", e.jsx(n, {
                    children: "Restore Map"
                }), " on the bottom right."]
            }),
            cb: t => t.event === r.RESTORE_THE_MAP
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Let’s think. What do we need to add next? ", e.jsx(i, {}), "Well, we’re going to want to have a ", e.jsx(n, {
                    children: "Snowball Launcher."
                }), " ", "This way you can fight back against the enemy (which you’ll add later)."]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["To do this, you’ll use the ", e.jsx(n, {
                    children: "Item Granter device."
                }), " This device allows you to grant players items in their inventory. ", e.jsx(i, {}), e.jsx(i, {}), "Go add an Item Granter device to the map, and place it to the right of your Questioner!"]
            }),
            cb: t => t.event === r.PLACE_DEVICE_DOWN && t.device.deviceOption.id === s.itemGranter
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Right now, the Item Granter doesn’t know which item you want to grant, you have to edit it! ", e.jsx(i, {}), e.jsx(n, {
                    children: "You can edit any device by clicking on it."
                }), " Go click on the Item Granter you just placed."]
            }),
            cb: t => t.event === r.OPEN_DEVICE_OPTIONS && t.device.deviceOption.id === s.itemGranter
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["You’re now on the ", e.jsx(n, {
                    children: "editing screen"
                }), ", where you can customize this device exactly how you want! ", e.jsx(i, {}), "You’ll see on the right side that there are all sorts of options you can change, including the item to grant, and how many of that item to grant."]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Go change the ", e.jsx(n, {
                    children: "Item To Grant"
                }), " option and select any", " ", e.jsx(n, {
                    children: "Snowball Launcher"
                }), "!"]
            }),
            cb: t => t.event === r.CHANGE_DEVICE_OPTION && t.device.deviceOption.id === s.itemGranter && t.option === "itemId" && t.value.toLocaleLowerCase().includes("snowball_launcher")
        }, {
            text: "Fantastic! Now this Item Granter will give the player a Snowball Launcher! ",
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Close out of the editing screen by clicking the ", e.jsx(n, {
                    children: "X"
                }), " on the top right!"]
            }),
            cb: t => t.event === r.CLOSE_DEVICE_OPTIONS
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["The Item Granter is setup, but now we need to connect it to Questioner in some way. ", e.jsx(i, {}), "We want to give the player a Snowball Launcher when they answer a question correctly.", e.jsx(i, {}), "How can we do that?"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["That is where the final piece of Gimkit Creative comes into play:", " ", e.jsx(n, {
                    children: "wires!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "Wires connect devices together"
                }), " — it’s the way different devices can communicate with one another."]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Open the ", e.jsx(n, {
                    children: "Add Menu"
                }), " and then select ", e.jsx(n, {
                    children: "Wires"
                }), "."]
            }),
            cb: t => t.event === r.START_ADDING_WIRE
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "Now select where the wire will come from."
                }), " Since we’re waiting on a player to answer a question, we want the wire to come from the Questioner device. ", e.jsx(i, {}), " ", e.jsx(i, {}), "Click the Questioner device to begin the wire!"]
            }),
            cb: t => t.event === r.START_WIRE_FROM_DEVICE && t.device.deviceOption.id === s.gimkitLiveQuestion
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "Now select where the wire will end."
                }), e.jsx(i, {}), "We want the player to get the Snowball Launcher, and the Item Granter is responsible for doing that! So,", " ", e.jsx(n, {
                    children: "select the Item Granter"
                }), " for the end of the wire."]
            }),
            cb: t => t.event === r.END_WIRE_TO_DEVICE && t.device.deviceOption.id === s.itemGranter
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Nice work! ", e.jsx(i, {}), "You connected the two devices together, but now you need to", " ", e.jsx(n, {
                    children: "tell it exactly what to do."
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["We want to grant the Snowball Launcher when a player answers a question correctly. ", e.jsx(i, {}), "On the left side, select ", e.jsx(n, {
                    children: "Question answered correctly"
                }), ". On the right side, select ", e.jsx(n, {
                    children: "Grant item"
                }), "."]
            }),
            cb: t => t.event === r.CONFIGURE_WIRE && t.wire.startConnection === "questionCorrect" && t.wire.endConnection === "grant"
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Perfection! Just like that,", " ", e.jsx(n, {
                    children: "you’ve connected these two devices together."
                }), e.jsx(i, {}), "Let’s make sure everything works! Close out of this screen by clicking the ", e.jsx(n, {
                    children: "X"
                }), " on the top right. Then, start the game by clicking", " ", e.jsx("div", {
                    style: {
                        display: "inline-block",
                        margin: 10
                    },
                    children: e.jsx(y, {
                        tooltip: "",
                        onClick: () => !1,
                        children: e.jsx(w, {
                            name: "fas fa-play"
                        })
                    })
                }), " ", "on the bottom right."]
            }),
            cb: t => t.event === r.START_THE_GAME
        }, {
            text: e.jsx(e.Fragment, {
                children: "Go answer a question correctly, and let’s see if you get a Snowball Launcher!"
            }),
            cb: t => t.event === r.GRANT_ITEM && t.itemId.toLocaleLowerCase().includes("snowball_launcher")
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "You got the Snowball Launcher, woohoo!"
                }), " ", e.jsx(i, {}), " ", e.jsx(i, {}), " In Gimkit Creative, this is exactly how you’ll create your own game mechanics.", " ", e.jsx(n, {
                    children: "You’ll place different devices together and connect them via wires!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["And just like that, you now know the four fundamentals of Gimkit Creative: ", e.jsx(n, {
                    children: "terrain, props, devices, and wires!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["End the game and then click ", e.jsx(n, {
                    children: "Restore Map"
                }), " to go back into Editing Mode."]
            }),
            cb: t => t.event === r.RESTORE_THE_MAP
        }, {
            text: e.jsx(e.Fragment, {
                children: "Let‘s finish your game by adding an enemy. You’ll have to defeat this enemy to win the game!"
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Open the ", e.jsx(n, {
                    children: "Add Menu"
                }), " and select ", e.jsx(n, {
                    children: "Devices"
                }), "."]
            }),
            cb: t => t.event === r.OPEN_ADD_SUBMENU && t.menu === "devices"
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Let’s add a ", e.jsx(n, {
                    children: "Sentry Device"
                }), ". ", e.jsx(i, {}), " The Sentry Device spawns an enemy that will fire at you in-game.", " ", e.jsx(n, {
                    children: "Select the Sentry Device."
                })]
            }),
            cb: t => t.event === r.SELECT_DEVICE_TO_ADD && t.deviceTypeId === s.sentry
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Now place the Sentry on the map! ", e.jsx(i, {}), "Make sure to place it in an open area so that you’re able to fire at it!"]
            }),
            cb: t => t.event === r.PLACE_DEVICE_DOWN && t.device.deviceOption.id === s.sentry
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["When you knockout the Sentry, we want the game to end. To end the game, we can use the ", e.jsx(n, {
                    children: "End Game Device!"
                }), " ", e.jsx(i, {}), " Open the", " ", e.jsx(n, {
                    children: "Add Menu"
                }), ", select ", e.jsx(n, {
                    children: "Devices"
                }), ", and then select the ", e.jsx(n, {
                    children: "End Game Device"
                }), "."]
            }),
            cb: t => t.event === r.SELECT_DEVICE_TO_ADD && t.deviceTypeId === s.endGame
        }, {
            text: "Place the End Game device just a little bit to the right of the Sentry!",
            cb: t => t.event === r.PLACE_DEVICE_DOWN && t.device.deviceOption.id === s.endGame
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Now…we want to connect these two devices together. And you know how we can do that: ", e.jsx(n, {
                    children: "wires!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Open the ", e.jsx(n, {
                    children: "Add Menu"
                }), ", select ", e.jsx(n, {
                    children: "Wires"
                }), ", and then place a wire starting from the ", e.jsx(n, {
                    children: "Sentry Device"
                }), " and ending at the ", e.jsx(n, {
                    children: "End Game Device"
                }), "."]
            }),
            cb: t => t.event === r.END_WIRE_TO_DEVICE && t.device.deviceOption.id === s.endGame
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Perfect. Now, let’s configure the wire.", e.jsx(i, {}), "Make it so once the Sentry gets knocked out, the game ends!"]
            }),
            cb: t => t.event === r.CONFIGURE_WIRE && t.wire.startConnection === "knockedOut" && t.wire.endConnection === "endGame"
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Way to go! With that, I think your game is ready! ", e.jsx(i, {}), e.jsx(n, {
                    children: "Start the game"
                }), " and let’s try it for real!"]
            }),
            cb: t => t.event === r.START_THE_GAME
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsx(n, {
                    children: "The game has started!"
                }), e.jsx(i, {}), "Go answer a question correctly, gain the snowball launcher, and knockout that enemy!"]
            }),
            cb: t => t.event === r.END_THE_GAME_BY_DEVICE
        }, {
            text: e.jsx(e.Fragment, {
                children: e.jsx("div", {
                    className: "animated tada",
                    children: "Woohoo! It worked!"
                })
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: [e.jsxs(n, {
                    children: ["Great work today, ", M().firstName, "!"]
                }), " You've already built your very own mini-game!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Keep exploring Gimkit Creative!", e.jsx(i, {}), "As you explore and learn, you'll be able to build more & more types of maps & games! ", e.jsx(n, {
                    children: "The possibilities are endless!"
                })]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["Also, don’t worry if you’re not understanding something! Gimkit Creative is open for you to just experiment, and play around!", " ", e.jsx(i, {}), " ", e.jsx(i, {}), " Just like any other skill, you may not get it right away. But", " ", e.jsx(n, {
                    children: "the more you practice, the better you’ll get."
                }), " You can do this!"]
            }),
            cb: o
        }, {
            text: e.jsxs(e.Fragment, {
                children: ["And...that's the end of the tutorial.", " ", e.jsx(n, {
                    children: "Click the button to the right to claim your reward!"
                })]
            }),
            cb: () => !1
        }]
    },
    X = 1500,
    J = 100,
    K = 5,
    O = 125,
    Z = t => {
        const [c, g] = h.useState(0), u = h.useRef(null), m = x.steps[c].text, p = x.steps[c].cb, L = p === o, G = (l, d) => {
            const j = x.steps[d];
            j && j.cb !== o && (j.completed || j.cb(l) && (j.cb = o))
        }, P = () => {
            for (let l = 1; l < x.steps.length; l++) {
                const d = x.steps[c + l];
                if (d && !d.completed) {
                    g(c + l);
                    break
                }
            }
        };
        z(l => {
            for (let d = 1; d < K + 1; d++) G(l, c + d);
            p(l) && c < x.steps.length - 1 && P()
        });
        const [W, C] = h.useState(!0);
        h.useEffect(() => {
            C(!0);
            const l = setTimeout(() => {
                C(!1)
            }, X);
            return () => {
                clearTimeout(l)
            }
        }, [c]), h.useEffect(() => {
            const l = setInterval(() => {
                var d;
                (d = u.current) == null || d.focus()
            }, J);
            return () => {
                clearInterval(l)
            }
        }, []);
        const B = `/host?id=${t.intentId}`,
            f = c === x.steps.length - 1,
            _ = f ? "Claim Reward" : "Next";
        return e.jsxs(ee, {
            children: [e.jsx(D, {
                title: "Gimkit Creative Tutorial",
                override: !0
            }), e.jsxs(te, {
                children: [e.jsx(ne, {
                    children: e.jsx("iframe", {
                        ref: u,
                        style: {
                            border: "none"
                        },
                        className: "maxAll",
                        width: "100%",
                        height: "100%",
                        src: B,
                        title: "Creative Tutorial",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    })
                }), e.jsx(ie, {
                    children: e.jsx(Q, {
                        children: e.jsxs(re, {
                            children: [e.jsx(oe, {
                                src: A("characters/spine/preview/construction.png")
                            }), e.jsx(se, {
                                children: e.jsx($, {
                                    percent: f ? 99.99 : c / x.steps.length * 100,
                                    status: "active",
                                    style: {
                                        width: "80%",
                                        maxWidth: 450,
                                        marginTop: 30
                                    },
                                    trailColor: "rgba(255, 255, 255, 0.2)",
                                    showInfo: !1
                                })
                            }), e.jsx(ae, {
                                children: e.jsx(ce, {
                                    children: m
                                })
                            }), (L || f) && !W ? e.jsx(S, {
                                className: "animated fadeIn",
                                children: e.jsx(T, {
                                    type: "success",
                                    customFontWeight: k.Bold,
                                    onClick: () => {
                                        if (f) {
                                            t.onTutorialComplete();
                                            return
                                        }
                                        q({
                                            event: r.NEXT
                                        })
                                    },
                                    ariaLabel: _,
                                    children: _
                                })
                            }) : e.jsx(S, {})]
                        })
                    })
                })]
            })]
        })
    },
    ee = a.div.attrs({
        className: "flex hc"
    })`
  flex: 1;
  background: ${b.BackgroundPurple};
`,
    te = a(N).attrs({
        className: "maxAll"
    })`
  flex-direction: column;
`,
    ne = a.div`
  flex: 1;
  width: 100%;
`,
    ie = a.div.attrs({
        className: "maxWidth"
    })`
  min-height: ${O}px;
  box-shadow: 0px 2px 14px 0px black;
  background: #182673;
  color: ${b.White};
  overflow: hidden;
  flex-shrink: 0;
`,
    re = a.div.attrs({
        className: "maxAll flex vc between"
    })`
  position: relative;
  min-height: ${O}px;
  padding: 25px 30px;
  padding-top: 40px;
`,
    oe = a.img`
  height: 153px;
  position: absolute;
  bottom: -32px;
  left: -22px;
  opacity: 0.9;
  transform: rotate(356deg);
`,
    se = a.div.attrs({
        className: "maxWidth flex-center"
    })`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
`,
    ae = a.div`
  font-size: 19px;
  margin-left: 105px;
`,
    ce = a.div`
  text-align: left;
  margin: auto auto auto 0;
`,
    S = a.div.attrs({
        className: "flex hc vc maxHeight"
    })`
  margin-left: 35px;
  flex-shrink: 0;
  min-width: 85px;
`,
    le = () => {
        const [t, c] = h.useState(!0), [g, u] = h.useState(!1), m = () => {
            c(!0), I({
                url: "/api/created-map/tutorial-reward",
                method: "POST",
                success: () => {
                    u(!1)
                },
                error: () => {
                    u(!0)
                },
                both: () => {
                    c(!1)
                }
            })
        };
        return h.useEffect(() => {
            R("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"), m()
        }, []), t ? e.jsx(v, {
            children: e.jsx(F, {
                size: "large"
            })
        }) : g ? e.jsxs(v, {
            children: [e.jsx("div", {
                style: {
                    fontFamily: E.SFPro,
                    fontSize: 18,
                    textTransform: "none",
                    marginBottom: 10
                },
                children: "An error occurred redeeming your reward. Click the button to try again."
            }), e.jsx(H, {
                onClick: m,
                children: "Try Again"
            })]
        }) : e.jsx(v, {
            children: e.jsxs(v, {
                className: "animated fadeIn",
                children: [e.jsx(de, {
                    children: "Gimkit Creative"
                }), e.jsx(he, {
                    children: "Tutorial Complete!"
                }), e.jsx("div", {
                    className: "animated pulse infinite",
                    style: {
                        animationDuration: "3s"
                    },
                    children: e.jsx(xe, {})
                }), e.jsxs(ue, {
                    children: ["You unlocked the", " ", e.jsx("span", {
                        style: {
                            color: "#ffff94"
                        },
                        children: "Blueprint Gim!"
                    }), " You can find it in your Locker!"]
                }), e.jsx("div", {
                    style: {
                        marginTop: 30
                    },
                    children: e.jsx(T, {
                        type: "success",
                        customFontWeight: k.Bold,
                        style: {
                            fontFamily: E.SFPro
                        },
                        size: "large",
                        onClick: () => window.location.href = "/",
                        ariaLabel: "Back To Dashboard",
                        children: "Back To Dashboard"
                    })
                })]
            })
        })
    },
    v = a(N)`
  flex: 1;
  background: #25397d;
  color: ${b.White};
  font-family: ${E.FugazOne};
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
`,
    de = a.div`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 26px;
  opacity: 0.85;
`,
    he = a.div`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 48px;
  margin-top: -9px;
`,
    xe = a.img.attrs({
        src: A("characters/spine/preview/construction.png")
    })`
  height: 279px;
  transform: rotate(355deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`,
    ue = a.div`
  font-family: ${E.SFPro};
  text-transform: none;
  font-weight: ${k.Bold};
  font-size: 21px;
  margin-top: 10px;
`,
    Se = () => {
        const [t, c] = h.useState(null), [g, u] = V(!1);
        h.useEffect(() => {
            I({
                url: "/api/matchmaker/intent/map/tutorial/create",
                success: p => {
                    c(p)
                },
                error: p => {
                    U({
                        e: p,
                        default: {
                            title: "There was an error loading into the tutorial."
                        },
                        onOk: () => window.location.href = "/"
                    })
                }
            })
        }, []);
        const m = () => t ? g ? e.jsx(le, {}) : e.jsx(Z, {
            intentId: t,
            onTutorialComplete: u
        }) : e.jsx(me, {
            children: e.jsx(F, {
                size: "large"
            })
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(D, {
                title: "Gimkit Creative Tutorial"
            }), m()]
        })
    },
    me = a(Y).attrs({
        className: "maxAll"
    })``;
export {
    me as Container, Se as
    default
};
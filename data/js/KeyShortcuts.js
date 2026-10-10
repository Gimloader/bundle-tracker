import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./phaser.js";
var n = e(t()),
    r = {
        None: {
            Home: {
                OpenAddMenu: () => n.default.Input.Keyboard.KeyCodes.E,
                OpenRemoveMenu: () => n.default.Input.Keyboard.KeyCodes.Q,
                Inventory: () => n.default.Input.Keyboard.KeyCodes.I,
                Scoreboard: () => n.default.Input.Keyboard.KeyCodes.L,
                OpenAddWire: () => n.default.Input.Keyboard.KeyCodes.Z,
                DuringGame: {
                    Reload: () => n.default.Input.Keyboard.KeyCodes.R,
                    ConsumeItem: () => n.default.Input.Keyboard.KeyCodes.R
                }
            },
            All: {
                Interact: () => n.default.Input.Keyboard.KeyCodes.ENTER,
                CutDevice: () => n.default.Input.Keyboard.KeyCodes.M,
                CopyDevice: () => n.default.Input.Keyboard.KeyCodes.C,
                Multiselect: () => n.default.Input.Keyboard.KeyCodes.ALT,
                MultiselectDelete: () => n.default.Input.Keyboard.KeyCodes.BACKSPACE
            }
        },
        Adding: {
            SwitchToRemoveMode: () => n.default.Input.Keyboard.KeyCodes.Q,
            GoBack: () => n.default.Input.Keyboard.KeyCodes.OPEN_BRACKET,
            ToggleShow: () => n.default.Input.Keyboard.KeyCodes.SPACE,
            Terrain: {
                TogglePiece: () => n.default.Input.Keyboard.KeyCodes.SHIFT,
                BrushSize: {
                    One: () => n.default.Input.Keyboard.KeyCodes.ONE,
                    Two: () => n.default.Input.Keyboard.KeyCodes.TWO,
                    Three: () => n.default.Input.Keyboard.KeyCodes.THREE,
                    Four: () => n.default.Input.Keyboard.KeyCodes.FOUR
                }
            },
            Device: {
                Copy: {
                    LockVertical: () => n.default.Input.Keyboard.KeyCodes.H,
                    LockHorizontal: () => n.default.Input.Keyboard.KeyCodes.V
                }
            }
        },
        Removing: {
            SwitchToAddingMode: () => n.default.Input.Keyboard.KeyCodes.E
        },
        VisualEditing: {
            SnapAngle: () => n.default.Input.Keyboard.KeyCodes.SHIFT,
            Done: () => n.default.Input.Keyboard.KeyCodes.ENTER
        },
        PlatformerModeEditing: {
            ActivateTopDownControls: () => n.default.Input.Keyboard.KeyCodes.G
        }
    };
export {
    r as t
};
const { ref, onBeforeUnmount } = Vue;

const app = Vue.createApp({
    data: function () {
        return {
            isOutMapChecked: this.initIsOutMapChecked(),
            isOutCompassChecked: this.initIsOutCompassChecked(),
            isCompassFollowChecked: this.initIsCompassFollowChecked(),
            isOpenMenuSoundsChecked: this.initIsOpenMenuSoundsChecked(),
            isResetSoundsChecked: this.initIsResetSoundsChecked(),
            isListSoundsChecked: this.initIsListSoundsChecked(),
            isMapNotifChecked: this.initIsMapNotifChecked(),
            isLowFuelChecked: this.initIsLowFuelChecked(),
            isCinematicNotifChecked: this.initIsCinematicNotifChecked(),
            isDynamicHealthChecked: this.initIsDynamicHealthChecked(),
            isDynamicArmorChecked: this.initIsDynamicArmorChecked(),
            isDynamicHungerChecked: this.initIsDynamicHungerChecked(),
            isDynamicThirstChecked: this.initIsDynamicThirstChecked(),
            isDynamicStressChecked: this.initIsDynamicStressChecked(),
            isDynamicOxygenChecked: this.initIsDynamicOxygenChecked(),
            isChangeFPSChecked: this.initIsChangeFPSChecked(),
            isToggleMapShapeChecked: this.initIsToggleMapShapeChecked(),
            isHideMapChecked: this.initIsHideMapChecked(),
            isToggleMapBordersChecked: this.initIsToggleMapBordersChecked(),
            isDynamicEngineChecked: this.initIsDynamicEngineChecked(),
            isDynamicNitroChecked: this.initIsDynamicNitroChecked(),
            isChangeCompassFPSChecked: this.initIsChangeCompassFPSChecked(),
            isShowCompassChecked: this.initIsShowCompassChecked(),
            isShowStreetsChecked: this.initIsShowStreetsChecked(),
            isPointerShowChecked: this.initIsPointerShowChecked(),
            isDegreesShowChecked: this.initIsDegreesShowChecked(),
            isCinematicModeChecked: this.initisCinematicModeChecked(),
            HungerIcon: "fas fa-utensils",
            SafeZoneIcon: "fas fa-shield",
            voiceIcon: "fas fa-headset",
            SafeZoneColor: "red",
            show: false,
            showPriorityCooldown: false,
            priorityTime: '',
            priorityInterval: null,
            priorityMinutes: 0,
            prioritySeconds: 0,
        };
    },
    setup() {
        const progress = ref([
            { loading: false, percentage: 0 },
            { loading: false, percentage: 0 },
            { loading: false, percentage: 0 },
        ]);

        const intervals = [null, null, null];

        function startComputing(id) {
            progress.value[id].loading = true;
            progress.value[id].percentage = 0;

            intervals[id] = setInterval(() => {
                progress.value[id].percentage += Math.floor(Math.random() * 8 + 10);
                if (progress.value[id].percentage >= 100) {
                    clearInterval(intervals[id]);
                    progress.value[id].loading = false;
                }
            }, 700);
        }

        onBeforeUnmount(() => {
            intervals.forEach((val) => {
                clearInterval(val);
            });
        });
        return {
            framework: {
                plugins: ["LocalStorage", "SessionStorage"],
            },
            tab: ref("hud"),
            splitterModel: ref(20),
            selection: ref([]),
            progress,
            startComputing,
        };
    },
    watch: {
        isOutMapChecked: function () {
            localStorage.setItem("isOutMapChecked", this.isOutMapChecked);
        },
        isOutCompassChecked: function () {
            localStorage.setItem("isOutCompassChecked", this.isOutCompassChecked);
        },
        isCompassFollowChecked: function () {
            localStorage.setItem("isCompassFollowChecked", this.isCompassFollowChecked);
        },
        isOpenMenuSoundsChecked: function () {
            localStorage.setItem("isOpenMenuSoundsChecked", this.isOpenMenuSoundsChecked);
        },
        isResetSoundsChecked: function () {
            localStorage.setItem("isResetSoundsChecked", this.isResetSoundsChecked);
        },
        isListSoundsChecked: function () {
            localStorage.setItem("isListSoundsChecked", this.isListSoundsChecked);
        },
        isMapNotifChecked: function () {
            localStorage.setItem("isMapNotifChecked", this.isMapNotifChecked);
        },
        isLowFuelChecked: function () {
            localStorage.setItem("isLowFuelChecked", this.isLowFuelChecked);
        },
        isCinematicNotifChecked: function () {
            localStorage.setItem("isCinematicNotifChecked", this.isCinematicNotifChecked);
        },
        isDynamicHealthChecked: function () {
            localStorage.setItem("isDynamicHealthChecked", this.isDynamicHealthChecked);
        },
        isDynamicArmorChecked: function () {
            localStorage.setItem("isDynamicArmorChecked", this.isDynamicArmorChecked);
        },
        isDynamicHungerChecked: function () {
            localStorage.setItem("isDynamicHungerChecked", this.isDynamicHungerChecked);
        },
        isDynamicThirstChecked: function () {
            localStorage.setItem("isDynamicThirstChecked", this.isDynamicThirstChecked);
        },
        isDynamicStressChecked: function () {
            localStorage.setItem("isDynamicStressChecked", this.isDynamicStressChecked);
        },
        isDynamicOxygenChecked: function () {
            localStorage.setItem("isDynamicOxygenChecked", this.isDynamicOxygenChecked);
        },
        isChangeFPSChecked: function () {
            localStorage.setItem("isChangeFPSChecked", this.isChangeFPSChecked);
        },
        isToggleMapShapeChecked: function () {
            localStorage.setItem("isToggleMapShapeChecked", this.isToggleMapShapeChecked);
        },
        isHideMapChecked: function () {
            localStorage.setItem("isHideMapChecked", this.isHideMapChecked);
        },
        isToggleMapBordersChecked: function () {
            localStorage.setItem("isToggleMapBordersChecked", this.isToggleMapBordersChecked);
        },
        isDynamicEngineChecked: function () {
            localStorage.setItem("isDynamicEngineChecked", this.isDynamicEngineChecked);
        },
        isDynamicNitroChecked: function () {
            localStorage.setItem("isDynamicNitroChecked", this.isDynamicNitroChecked);
        },
        isChangeCompassFPSChecked: function () {
            localStorage.setItem("isChangeCompassFPSChecked", this.isChangeCompassFPSChecked);
        },
        isShowCompassChecked: function () {
            localStorage.setItem("isShowCompassChecked", this.isShowCompassChecked);
        },
        isShowStreetsChecked: function () {
            localStorage.setItem("isShowStreetsChecked", this.isShowStreetsChecked);
        },
        isPointerShowChecked: function () {
            localStorage.setItem("isPointerShowChecked", this.isPointerShowChecked);
        },
        isDegreesShowChecked: function () {
            localStorage.setItem("isDegreesShowChecked", this.isDegreesShowChecked);
        },
        isCinematicModeChecked: function () {
            localStorage.setItem("isCinematicModeChecked", this.isCinematicModeChecked);
        },
    },
    methods: {
        initIsOutMapChecked: function () {
            const stored = localStorage.getItem("isOutMapChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsOutCompassChecked: function () {
            const stored = localStorage.getItem("isOutCompassChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsCompassFollowChecked: function () {
            const stored = localStorage.getItem("isCompassFollowChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsOpenMenuSoundsChecked: function () {
            const stored = localStorage.getItem("isOpenMenuSoundsChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsResetSoundsChecked: function () {
            const stored = localStorage.getItem("isResetSoundsChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsListSoundsChecked: function () {
            const stored = localStorage.getItem("isListSoundsChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsMapNotifChecked: function () {
            const stored = localStorage.getItem("isMapNotifChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsLowFuelChecked: function () {
            const stored = localStorage.getItem("isLowFuelChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsCinematicNotifChecked: function () {
            const stored = localStorage.getItem("isCinematicNotifChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicHealthChecked: function () {
            const stored = localStorage.getItem("isDynamicHealthChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicArmorChecked: function () {
            const stored = localStorage.getItem("isDynamicArmorChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicHungerChecked: function () {
            const stored = localStorage.getItem("isDynamicHungerChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicThirstChecked: function () {
            const stored = localStorage.getItem("isDynamicThirstChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicStressChecked: function () {
            const stored = localStorage.getItem("isDynamicStressChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicOxygenChecked: function () {
            const stored = localStorage.getItem("isDynamicOxygenChecked");
            return stored === null ? true : stored === "true";
        },
        initIsChangeFPSChecked: function () {
            const stored = localStorage.getItem("isChangeFPSChecked");
            if (stored === null) {
                return "Optimized";
            } else {
                return stored;
            }
        },
        initIsToggleMapShapeChecked: function () {
            const stored = localStorage.getItem("isToggleMapShapeChecked");
            if (stored === null) {
                return "Circle";
            } else {
                return stored;
            }
        },
        initIsHideMapChecked: function () {
            const stored = localStorage.getItem("isHideMapChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsToggleMapBordersChecked: function () {
            const stored = localStorage.getItem("isToggleMapBordersChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicEngineChecked: function () {
            const stored = localStorage.getItem("isDynamicEngineChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsDynamicNitroChecked: function () {
            const stored = localStorage.getItem("isDynamicNitroChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        initIsChangeCompassFPSChecked: function () {
            const stored = localStorage.getItem("isChangeCompassFPSChecked");
            if (stored === null) {
                return "Optimized";
            } else {
                return stored;
            }
        },
        initIsShowCompassChecked: function () {
            const stored = localStorage.getItem("isShowCompassChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsShowStreetsChecked: function () {
            const stored = localStorage.getItem("isShowStreetsChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsPointerShowChecked: function () {
            const stored = localStorage.getItem("isPointerShowChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initIsDegreesShowChecked: function () {
            const stored = localStorage.getItem("isDegreesShowChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == "true";
            }
        },
        initisCinematicModeChecked: function () {
            const stored = localStorage.getItem("isCinematicModeChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == "true";
            }
        },
        resetStorage: function (event) {
            targetId = event.currentTarget.id;
            localStorage.clear();
            resetStorage();
        },
        restartHud: function (event) {
            targetId = event.currentTarget.id;
            restartHud();
        },
        showOutMap: function (event) {
            targetId = event.currentTarget.id;
            showOutMap();
        },
        showOutCompass: function (event) {
            targetId = event.currentTarget.id;
            showOutCompass();
        },
        showFollowCompass: function (event) {
            targetId = event.currentTarget.id;
            showFollowCompass();
        },
        openMenuSounds: function (event) {
            targetId = event.currentTarget.id;
            openMenuSounds();
        },
        resetHudSounds: function (event) {
            targetId = event.currentTarget.id;
            resetHudSounds();
        },
        checklistSounds: function (event) {
            targetId = event.currentTarget.id;
            checklistSounds();
        },
        showMapNotif: function (event) {
            targetId = event.currentTarget.id;
            showMapNotif();
        },
        showFuelAlert: function (event) {
            targetId = event.currentTarget.id;
            showFuelAlert();
        },
        showCinematicNotif: function (event) {
            targetId = event.currentTarget.id;
            showCinematicNotif();
        },
        dynamicHealth: function (event) {
            targetId = event.currentTarget.id;
            dynamicHealth();
        },
        dynamicArmor: function (event) {
            targetId = event.currentTarget.id;
            dynamicArmor();
        },
        dynamicHunger: function (event) {
            targetId = event.currentTarget.id;
            dynamicHunger();
        },
        dynamicThirst: function (event) {
            targetId = event.currentTarget.id;
            dynamicThirst();
        },
        dynamicStress: function (event) {
            targetId = event.currentTarget.id;
            dynamicStress();
        },
        dynamicOxygen: function (event) {
            targetId = event.currentTarget.id;
            dynamicOxygen();
        },
        changeFPS: function (event) {
            targetId = event.currentTarget.id;
            changeFPS();
        },
        ToggleMapShape: function (event) {
            targetId = event.currentTarget.id;
            ToggleMapShape();
        },
        HideMap: function (event) {
            targetId = event.currentTarget.id;
            HideMap();
        },
        ToggleMapBorders: function (event) {
            targetId = event.currentTarget.id;
            ToggleMapBorders();
        },
        dynamicEngine: function (event) {
            targetId = event.currentTarget.id;
            dynamicEngine();
        },
        dynamicNitro: function (event) {
            targetId = event.currentTarget.id;
            dynamicNitro();
        },
        changeCompassFPS: function (event) {
            targetId = event.currentTarget.id;
            changeCompassFPS();
        },
        showCompassBase: function (event) {
            targetId = event.currentTarget.id;
            showCompassBase();
        },
        showStreetsNames: function (event) {
            targetId = event.currentTarget.id;
            showStreetsNames();
        },
        showPointerIndex: function (event) {
            targetId = event.currentTarget.id;
            showPointerIndex();
        },
        showDegreesNum: function (event) {
            targetId = event.currentTarget.id;
            showDegreesNum();
        },
        cinematicMode: function (event) {
            targetId = event.currentTarget.id;
            cinematicMode();
        },
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.event === "isToggleMapShapeChecked" || event.data.event === "isChangeFPSChecked") {
                eval(`this.${event.data.event} = "${event.data.toggle}"`);
            }
        });
    },
    beforeDestroy() {
        if (this.priorityInterval) {
            clearInterval(this.priorityInterval);
        }
    }
});

app.use(Quasar, { config: {} });
app.mount("#menu");

document.onkeyup = function (data) {
    if (data.key == "Escape") {
        closeMenu();
    }
};

function closeMenu() {
    $("#openmenu").fadeOut(550);
    $.post("https://iski-hud/closeMenu");
}
function restartHud() {
    closeMenu();
    $.post("https://iski-hud/restartHud");
}
function resetStorage() {
    closeMenu();
    $.post("https://iski-hud/resetStorage");
}
function showOutMap() {
    $.post("https://iski-hud/showOutMap");
}
function showOutCompass() {
    $.post("https://iski-hud/showOutCompass");
}
function showFollowCompass() {
    $.post("https://iski-hud/showFollowCompass");
}
function openMenuSounds() {
    $.post("https://iski-hud/openMenuSounds");
}
function resetHudSounds() {
    $.post("https://iski-hud/resetHudSounds");
}
function checklistSounds() {
    $.post("https://iski-hud/checklistSounds");
}
function showMapNotif() {
    $.post("https://iski-hud/showMapNotif");
}
function showFuelAlert() {
    $.post("https://iski-hud/showFuelAlert");
}
function showCinematicNotif() {
    $.post("https://iski-hud/showCinematicNotif");
}
function dynamicHealth() {
    $.post("https://iski-hud/dynamicHealth");
}
function dynamicArmor() {
    $.post("https://iski-hud/dynamicArmor");
}
function dynamicHunger() {
    $.post("https://iski-hud/dynamicHunger");
}
function dynamicThirst() {
    $.post("https://iski-hud/dynamicThirst");
}
function dynamicStress() {
    $.post("https://iski-hud/dynamicStress");
}
function dynamicOxygen() {
    $.post("https://iski-hud/dynamicOxygen", {}, function() {
        $.post("https://iski-hud/playChecklistSound");
    });
}
function dynamicEngine() {
    $.post("https://iski-hud/dynamicEngine");
}
function dynamicNitro() {
    $.post("https://iski-hud/dynamicNitro");
}
function ToggleMapShape() {
    $.post("https://iski-hud/ToggleMapShape");
}
function changeFPS() {
    $.post("https://iski-hud/changeFPS");
}
function ToggleMapBorders() {
    $.post("https://iski-hud/ToggleMapBorders");
}
function HideMap() {
    $.post("https://iski-hud/HideMap");
}
function changeCompassFPS() {
    $.post("https://iski-hud/changeCompassFPS");
}
function showCompassBase() {
    $.post("https://iski-hud/showCompassBase");
}
function showStreetsNames() {
    $.post("https://iski-hud/showStreetsNames");
}
function showPointerIndex() {
    $.post("https://iski-hud/showPointerIndex");
}
function showDegreesNum() {
    $.post("https://iski-hud/showDegreesNum");
}
function cinematicMode() {
    $.post("https://iski-hud/cinematicMode");
}

$(document).ready(function () {
    window.addEventListener("message", function (event) {
        switch (event.data.action) {
            case "open":
                Open(event.data);
                break;
        }
    });
});

Open = function (data) {
    $("#openmenu").fadeIn(150);
};
$(".closeMenu").click(() => {
    closeMenu();
});

// MONEY HUD

const moneyHud = Vue.createApp({
    data() {
        return {
            cash: 0,
            bank: 0,
            amount: 0,
            plus: false,
            minus: false,
            showCash: false,
            showBank: false,
            showUpdate: false,
        };
    },
    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            switch (event.data.action) {
                case "showconstant":
                    this.showConstant(event.data);
                    break;
                case "updatemoney":
                    this.update(event.data);
                    break;
                case "show":
                    this.showAccounts(event.data);
                    break;
            }
        });
    },
    methods: {
        // CONFIGURE YOUR CURRENCY HERE
        // https://www.w3schools.com/tags/ref_language_codes.asp LANGUAGE CODES
        // https://www.w3schools.com/tags/ref_country_codes.asp COUNTRY CODES
        formatMoney(value) {
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
            });
            return formatter.format(value);
        },
        showConstant(data) {
            this.showCash = true;
            this.showBank = true;
            this.cash = data.cash;
            this.bank = data.bank;
        },
        update(data) {
            this.showUpdate = true;
            this.amount = data.amount;
            this.bank = data.bank;
            this.cash = data.cash;
            this.minus = data.minus;
            this.plus = data.plus;
            if (data.type === "cash") {
                if (data.minus) {
                    this.showCash = true;
                    this.minus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showCash = false), 2000);
                } else {
                    this.showCash = true;
                    this.plus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showCash = false), 2000);
                }
            }
            if (data.type === "bank") {
                if (data.minus) {
                    this.showBank = true;
                    this.minus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showBank = false), 2000);
                } else {
                    this.showBank = true;
                    this.plus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showBank = false), 2000);
                }
            }
        },
        showAccounts(data) {
            if (data.type === "cash" && !this.showCash) {
                this.showCash = true;
                this.cash = data.cash;
                setTimeout(() => (this.showCash = false), 3500);
            } else if (data.type === "bank" && !this.showBank) {
                this.showBank = true;
                this.bank = data.bank;
                setTimeout(() => (this.showBank = false), 3500);
            }
        },
    },
}).mount("#money-container"); 

// PLAYER HUD

const playerHud = {
    data() {
        return {
            dynamicHealth: 0,
            dynamicHunger: 0,
            dynamicThirst: 0,
            dynamicStress: 0,
            dynamicOxygen: 0,
            dynamicEngine: 0,
            dynamicNitro: 0,
            nos: 0,
            static: 100,
            health: 0,
            playerDead: 0,
            armor: 0,
            hunger: 0,
            thirst: 0,
            stress: 0,
            voice: 0,
            radio: 0,
            harness: 0,
            nitroActive: 0,
            cruise: 0,
            parachute: 0,
            oxygen: 0,
            hp: 0,
            armed: 0,
            safezone:0,
            speed: 0,
            engine: 0,
            cinematic: 0,
            dev: 0,
            show: false,
            talking: false,
            showSafeZone: true,
            showVoice: true,
            showRadio: true,
            showHealth: true,
            showArmor: true,
            showHunger: true,
            showThirst: true,
            showNos: true,
            showStress: true,
            showOxygen: false,
            showArmed: true,
            showEngine: false,
            showCruise: false,
            showHarness: false,
            showParachute: false,
            showDev: false,
            SafeZoneIcon: "fas fa-shield",
            HungerIcon: "fas fa-utensils",
            voiceIcon: "fas fa-headset",
            SafeZoneColor: "red",
            talkingColor: "#84898f",
            radioColor: "#84898f",
            nosColor: "",
            engineColor: "",
            armorColor: "",
            hungerColor: "",
            healthColor: "",
            thirstColor: "",
            radioActive: false,
        };
    },

    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.action === "hudtick") {
                this.hudTick(event.data);
            }
        });
        Config = {};
    },
    methods: {
        hudTick(data) {
            this.show = data.show;
            this.health = data.health;
            this.armor = data.armor;
            this.hunger = data.hunger;
            this.thirst = data.thirst;
            this.stress = data.stress;
            this.voice = data.voice;
            this.radioBar = data.radioBar;
            this.radioActive = data.radioActive;
            this.nos = data.nos;
            this.oxygen = data.oxygen;
            this.cruise = data.cruise;
            this.nitroActive = data.nitroActive;
            this.harness = data.harness;
            this.speed = data.speed;
            this.armed = data.armed;
            this.parachute = data.parachute;
            this.hp = data.hp * 5;
            this.engine = data.engine;
            this.cinematic = data.cinematic;
            this.dev = data.dev;
            this.playerDead = data.playerDead;
            this.dynamicHealth = data.dynamicHealth;
            this.dynamicArmor = data.dynamicArmor;
            this.dynamicHunger = data.dynamicHunger;
            this.dynamicThirst = data.dynamicThirst;
            this.dynamicStress = data.dynamicStress;
            this.dynamicOxygen = data.dynamicOxygen;
            this.dynamicEngine = data.dynamicEngine;
            this.dynamicNitro = data.dynamicNitro;
            this.SafeZone = data.SafeZone;


            if (data.SafeZone === true ) {
                this.showSafeZone = true;
                this.SafeZoneIcon = 'fas fa-video';
                document.documentElement.style.setProperty('--b-zone-bar-color', 'green');
            } else {
                this.showSafeZone = true;
                this.SafeZoneIcon = 'fas fa-video-slash';
                document.documentElement.style.setProperty('--b-zone-bar-color', 'red');
            }

            if (data.dynamicHunger == true) {
                if (data.hunger >= 100) {
                    this.showHunger = false;
                } else {
                    this.showHunger = true;
                }
            } else if (data.dynamicHunger == false) {
                this.showHunger = true;
            }
            if (data.hunger >= 100) {
                this.hungerColor = "#dd6e14";
            } else if (data.hunger <= 30) {
                this.hungerColor = "#ff0000";
            } else {
                this.hungerColor = "#dd6e14";
            }

            if (data.dynamicThirst == true) {
                if (data.thirst >= 100) {
                    this.showThirst = false;
                } else {
                    this.showThirst = true;
                }
            } else if (data.dynamicThirst == false) {
                this.showThirst = true;
            }
            if (data.thirst >= 100) {
                this.thirstColor = "#1a7cad";
            } else if (data.thirst <= 30) {
                this.thirstColor = "#ff0000";
            } else {
                this.thirstColor = "#1a7cad";
            }

            if (data.dynamicStress == true) {
                if (data.stress == 0) {
                    this.showStress = false;
                } else {
                    this.showStress = true;
                }
            } else if (data.dynamicStress == false) {
                this.showStress = true;
            }

            if (data.dynamicOxygen == true) {
                if (data.oxygen >= 100) {
                    this.showOxygen = false;
                } else {
                    this.showOxygen = true;
                }
            } else if (data.dynamicOxygen == false) {
                this.showOxygen = true;
            }

            if (data.dynamicEngine == true) {
                if (data.engine >= 95) {
                    this.showEngine = false;
                } else if (data.engine < 0) {
                    this.showEngine = false;
                } else {
                    this.showEngine = true;
                }
            } else if (data.dynamicEngine == false) {
                if (data.engine < 0) {
                    this.showEngine = false;
                } else {
                    this.showEngine = true;
                }
            }
            if (data.engine <= 45) {
                this.engineColor = "#ff0000";
            } else if (data.engine <= 75 && data.engine >= 46) {
                this.engineColor = "#dd6e14";
            } else if (data.engine <= 100) {
                this.engineColor = "#3FA554";
            }

            if (data.dynamicNitro == true) {
                if (data.nos === 0 || data.nos === undefined) {
                    this.showNos = false;
                } else if (data.nos < 0) {
                    this.showNos = false;
                } else {
                    this.showNos = true;
                }   
            } else if (data.dynamicNitro == false) {
                if (data.nos < 0) {
                    this.showNos = false;
                } else {
                    this.showNos = true;
                }
            }
            if (data.nitroActive) {
                this.nosColor = "#D64763";
            } else {
                this.nosColor = "#FFFFFF";
            }

            if (data.radioActive) {
                document.documentElement.style.setProperty('--radio-bar-color', '#e0467989');
                document.documentElement.style.setProperty('--b-radio-bar-color', '#e0467989');
            } else {
                document.documentElement.style.setProperty('--radio-bar-color', '#d5d5d5');
                document.documentElement.style.setProperty('--b-radio-bar-color', '#ecececd7');
            }
            
            if (data.radio != 0 && data.radio != undefined) {
                this.showRadio = true;
            } else if (data.radio == 0 || data.radio == undefined) {
                this.showRadio = false;
            }

            if (data.talking) {
                document.documentElement.style.setProperty('--talk-bar-color', '#eaea57b7');
                document.documentElement.style.setProperty('--b-talk-bar-color', '#eaea57b7');
            } else {
                document.documentElement.style.setProperty('--talk-bar-color', '#d5d5d5');
                document.documentElement.style.setProperty('--b-talk-bar-color', '#ecececd7');
            }

            if (data.cruise === true) {
                this.cruise = 1;
                this.showCruise = true;
            } else {
                this.cruise = 0;
                this.showCruise = false;
            }

            if (data.harness === true) {
                this.showHarness = true;
            } else {
                this.showHarness = false;
            }
            if (data.armed === true) {
                this.showArmed = true;
            } else {
                this.showArmed = false;
            }

            if (data.parachute >= 0) {
                this.showParachute = true;
            } else {
                this.showParachute = false;
            }

            if (data.dev === true) {
                this.showDev = true;
            } else {
                this.showDev = false;
            }

            if (data.isPaused === 1) {
                this.show = false;
            }
        },
    },
};
const app2 = Vue.createApp(playerHud);
app2.use(Quasar);
app2.mount("#ui-container");

// VEHICLE HUD

const vehHud = {
    data() {
        return {
            speedometer: 66,
            fuelgauge: 69,
            altitudegauge: 75,
            fuel: 0,
            speed: 0,
            seatbelt: 0,
            showSquareB: 0,
            show: false,
            showAltitude: true,
            showSeatbelt: true,
            showSquare: false,
            showCircle: false,
            seatbeltColor: "",
        };
    },

    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.action === "car") {
                this.vehicleHud(event.data);
            }
        });
    },
    methods: {
        vehicleHud(data) {
            this.show = data.show;
            this.speed = data.speed;    

            this.altitude = data.altitude;
            const progressBar = document.querySelector('#progressBar .progress');
            if (progressBar) {
                progressBar.style.height = data.fuel + '%';
            
                if (data.fuel < 30) {
                    progressBar.style.backgroundColor = 'orange';
                } 
                if (data.fuel < 20) {
                    progressBar.style.backgroundColor = 'red';
                } 
                if (data.fuel >= 30) {
                    progressBar.style.backgroundColor = '#ffffff';
                }
            }
                         
            this.showSeatbelt = data.showSeatbelt;
            this.showAltitude = data.showAltitude;

            if (data.seatbelt === true) {
                this.seatbelt = 1;
                let seatbeltIcon = document.getElementById('SeatbeltIcon');
                if(seatbeltIcon) {
                    seatbeltIcon.style.opacity = 0;
                }
            } else {
                this.seatbelt = 0;
                let seatbeltIcon = document.getElementById('SeatbeltIcon');
                if(seatbeltIcon) {
                    seatbeltIcon.style.opacity = 1;
                }
            }
            
            if (data.showSeatbelt === true) {
                this.showSeatbelt = true;
            } else {
                this.showSeatbelt = false;
            }            
            if (data.showAltitude === true) {
                this.showAltitude = true;
            } else {
                this.showAltitude = false;
            }
            if (data.showSquareB === true) {
                this.showSquare = true;
            } else {
                this.showSquare = false;
            }
            if (data.showCircleB === true) {
                this.showCircle = true;
            } else {
                this.showCircle = false;
            }
            if (data.isPaused === 1) {
                this.show = false;
            }
        },
    },
    computed: {
        speedDisplay() {
            if (!this.show) {
                return '';
            }
            var speedStr = this.speed.toString().padStart(3, '0');
            var html = '';
            var nonZeroEncountered = false;
            for (var i = 0; i < speedStr.length; i++) {
                if (speedStr[i] !== '0') {
                    nonZeroEncountered = true;
                }
                if (nonZeroEncountered) {
                    html += '<span style="color: white;">' + speedStr[i] + '</span>';
                } else {
                    html += '<span style="color: #8f8f8f;">' + speedStr[i] + '</span>';
                }
            }
            return html;
        }
    }    
};
const app3 = Vue.createApp(vehHud);
app3.use(Quasar);
app3.mount("#veh-container");

// COMPASS HUD

const baseplateHud = {
    data() {
        return {
            show: false,
            street1: "",
            street2: "",
            showCompass: true,
            showStreets: true,
            showPointer: true,
            showDegrees: true,
        };
    },
    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.action == "update") {
                type = event.data.type;
                value = event.data.value / 2;
                if (value !== undefined) {
                    $(".degrees").html(value);
                    bar = document.getElementsByTagName("svg")[0];
                    bar.setAttribute("viewBox", "" + (value - 90) + " 0 180 5");
                    heading = document.getElementsByTagName("svg")[1];
                    heading.setAttribute("viewBox", "" + (value - 90) + " 0 180 1.5");
                }
            }
            if (event.data.action === "baseplate") {
                this.baseplateHud(event.data);
            }
        });
    },
    methods: {
        baseplateHud(data) {
            this.show = data.show;
            this.street1 = data.street1;
            this.street2 = data.street2;
            this.showCompass = data.showCompass;
            this.showStreets = data.showStreets;
            this.showPointer = data.showPointer;
            this.showDegrees = data.showDegrees;
            if (data.showCompass == true) {
                this.showCompass = true;
            } else {
                this.showCompass = false;
            }
            if (data.showStreets == true) {
                this.showStreets = true;
            } else {
                this.showStreets = false;
            }
            if (data.showPointer == true) {
                this.showPointer = true;
            } else {
                this.showPointer = false;
            }
            if (data.showDegrees == true) {
                this.showDegrees = true;
            } else {
                this.showDegrees = false;
            }
        },
    },
};
const app4 = Vue.createApp(baseplateHud);
app4.use(Quasar);
app4.mount("#baseplate-container");

function updateRPM(rpm) {
    var rpmBar = document.getElementById('rpmBar');
    if (rpmBar) {
        rpmBar.innerHTML = '';
        for (var i = 0; i < 18; i++) {
            var item = document.createElement('div');
            item.className = 'item';
            if (i < rpm) {
                if (i >= 16) {
                    item.classList.add('critical');
                } else {
                    item.classList.add('filled');
                }
            }
            rpmBar.appendChild(item);
        }
    }
}

window.addEventListener('message', function(event) {
    var rpm = event.data.rpm;
    if (rpm !== undefined) {
        updateRPM((rpm / 1) * 18);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("message", function(event) {
        var gearElement = document.getElementById("gear");
        if (gearElement && event.data.gear) {
            gearElement.innerHTML = event.data.gear;
        }
    });
});

// Priority Cooldown HUD
const priorityCooldown = Vue.createApp({
    data() {
        return {
            showPriorityCooldown: false,
            priorityTime: "",
            priorityInterval: null,
            initialSeconds: 0,
            currentSeconds: 0,
            borderFillPercentage: 1,
            isPaused: false,
            isActive: false
        };
    },
    methods: {
        startPriorityCooldown(data) {
            // Handle different cooldown states
            if (data.coldowntxt === "down") {
                this.resetCooldown();
                return;
            }

            if (data.coldowntxt === "ishold") {
                this.showPriorityCooldown = !this.isPaused;
                this.priorityTime = "ON ✅";
                this.borderFillPercentage = 1;
                this.isActive = true;
                return;
            }

            // Handle timer
            const minutes = parseInt(data.coldowntxt);
            if (!isNaN(minutes) && minutes > 0) {
                this.showPriorityCooldown = !this.isPaused;
                this.initialSeconds = minutes * 60;
                this.currentSeconds = this.initialSeconds;
                this.isActive = true;
                this.updateTimer(this.currentSeconds);
                this.startTimer();
            }
        },

        resetCooldown() {
            if (this.priorityInterval) {
                clearInterval(this.priorityInterval);
                this.priorityInterval = null;
            }
            this.showPriorityCooldown = false;
            this.priorityTime = "";
            this.currentSeconds = 0;
            this.borderFillPercentage = 0;
            this.isActive = false;
        },

        updateTimer(totalSeconds) {
            if (totalSeconds <= 0) {
                this.resetCooldown();
                return;
            }

            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            this.priorityTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            this.borderFillPercentage = totalSeconds / this.initialSeconds;
        },

        startTimer() {
            if (this.priorityInterval) {
                clearInterval(this.priorityInterval);
                this.priorityInterval = null;
            }

            this.priorityInterval = setInterval(() => {
                if (!this.isPaused && this.currentSeconds > 0) {
                    this.currentSeconds--;
                    this.updateTimer(this.currentSeconds);
                }
            }, 1000);
        },

        handlePauseMenu(isPaused) {
            this.isPaused = isPaused;
            if (this.priorityTime) {
                this.showPriorityCooldown = !isPaused;
            }
        }
    },
    mounted() {
        window.addEventListener("message", (event) => {
            if (event.data.action === "setPriorityCooldown") {
                this.startPriorityCooldown(event.data);
            } else if (event.data.action === "togglePriorityCooldown") {
                this.handlePauseMenu(event.data.show === false);
            }
        });
    },
    beforeDestroy() {
        this.resetCooldown();
    }
}).mount("#priority-cooldown");

window.addEventListener('message', function(event) {
    // ... existing code ...
    
    switch (event.data.action) {
        // ... existing cases ...
        
        case "setPriorityCooldown":
            $("#coldowntxt").html(event.data.coldowntxt);
            break;
            
        case "togglePriorityCooldown":
            if (event.data.show) {
                $("#coldowntxt").show();
            } else {
                $("#coldowntxt").hide();
            }
            break;
    }
});




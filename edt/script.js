"use strict";

/*
  EDIT YOUR TIMETABLES HERE.

  Each schedule has a unique code.
  Session types: course, td, tp, exit.
  Every TP must contain 4 to 6 modules.
*/

const inputField = document.getElementById('studentSearch');
    inputField.focus();


const DAYS = [
  // { name: "Lundi", date: "28/09" },
  { name: "Lundi", date: "" },
  { name: "Mardi", date: "" },
  { name: "Mercredi", date: "" },
  { name: "Jeudi", date: "" },
  { name: "Vendredi", date: "" },
  { name: "Samedi", date: "" }
];

const SCHEDULES = {
  "EER5G1": {
    code: "EER5G1",
    title: "EER5 G1",
    section: "S5 : EER",
    group: "G7",
    week: 40,
    year: 2026,

    sessions: [
      // MONDAY
      { day: 0, start: "08:30", end: "10:15",
        type: "course", subject: "ThermApa", room: "Amphi2" },
      { day: 0, start: "10:30", end: "12:15",
        type: "course", subject: "PhyStat", room: "Amphi2" },
      {
        day: 0, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "EltEInP", room: "Bloc C CS1", date: "12/10" },
          { subject: "EltEInP", room: "Bloc C CS1", date: "12/10" },
          { subject: "EltEInP", room: "Bloc C CS1", date: "12/10" },
          { subject: "EltEInP", room: "Bloc C CS1", date: "09/11" },
          { subject: "MecMilC", room: "S53", date: "19/10" },
          { subject: "MecMilC", room: "S53", date: "16/11" }
        ]
      },

      // TUESDAY
      { day: 1, start: "08:30", end: "10:15",
        type: "course", subject: "EltEInP", room: "Amphi5" },
      { day: 1, start: "10:30", end: "12:15",
        type: "course", subject: "MecMilC", room: "Amphi5" },
      { day: 1, start: "14:30", end: "16:15",
        type: "td", subject: "CalcSci", room: "S46" },
      { day: 1, start: "16:30", end: "18:15",
        type: "td", subject: "MecMilC", room: "S46" },

      // WEDNESDAY
      { day: 2, start: "08:30", end: "10:15",
        type: "course", subject: "CalcSci", room: "Amphi4" },

      // THURSDAY
      { day: 3, start: "08:30", end: "10:15",
        type: "td", subject: "PhyStat", room: "S80" },
      { day: 3, start: "10:30", end: "12:15",
        type: "td", subject: "ThermAp", room: "S80" },
      {
        day: 3, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "MecMilC", room: "S53", date: "29/10" },
          { subject: "MecMilC", room: "S53", date: "12/11" },
          { subject: "ThermAp", room: "S52", date: "30/10" },
          { subject: "ThermAp", room: "S52", date: "13/11" }
        ]
      },

      // FRIDAY
      { day: 4, start: "08:30", end: "10:15",
        type: "td", subject: "LngEtr3", room: "S108" },
      { day: 4, start: "10:30", end: "12:15",
        type: "td", subject: "EltEInP", room: "S48" },
      {
        day: 4, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "ThermAp", room: "S52", date: "30/10" },
          { subject: "ThermAp", room: "S52", date: "13/11" },
          { subject: "CalcSci", room: "S46", date: "06/11" },
          { subject: "CalcSci", room: "S46", date: "20/11" }
        ]
      }
    ]
  },
  "ES5G1": {
    code: "ES5G1",
    title: "ES5 G1",
    section: "S5 : ES",
    group: "G1",
    week: 40,
    year: 2026,

    sessions: [
      // MONDAY
      { day: 0, start: "08:30", end: "10:15", type: "td", subject: "ElnAna2", room: "S46" },
      { day: 0, start: "10:30", end: "12:15", type: "td", subject: "ElnNum2", room: "S46" },

      // TUESDAY

      { day: 1, start: "08:30", end: "10:15", type: "course", subject: "EltEInP", room: "Amphi5" },

      // WEDNESDAY
      { day: 2, start: "08:30", end: "10:15", type: "course", subject: "CalcSci", room: "Amphi4" },
      { day: 2, start: "10:30", end: "12:15", type: "course", subject: "MecQua2", room: "Amphi4" },

      // THURSDAY
      { day: 3, start: "08:30", end: "10:15", type: "course", subject: "ElnAna2", room: "Amphi2" },
      { day: 3, start: "10:30", end: "12:15", type: "course", subject: "ElnNum2", room: "Amphi2" },

      { day: 3, start: "14:30", end: "16:15", type: "td", subject: "EltEInP", room: "S46" },
      { day: 3, start: "16:30", end: "18:15", type: "td", subject: "MecQua2", room: "S46" },

      // FRIDAY
      
      { day: 4, start: "08:30", end: "10:15", type: "td", subject: "CalcSci", room: "S46" },
      { day: 4, start: "10:30", end: "12:15", type: "td", subject: "LngEtr3", room: "S108" },

      // TPS

      {
        day: 0, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "ElnAna2", room: "S51", date: "05/10" },
          { subject: "ElnAna2", room: "S51", date: "19/10" },
          { subject: "ElnAna2", room: "S51", date: "02/11" },
          { subject: "", room: "", date: "" },
        ]
      },

      {
        day: 1, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "", room: "", date: "" },
          { subject: "EltEInP", room: "Bloc C CS1", date: "20/10" },
          { subject: "EltEInP", room: "Bloc C CS1", date: "03/11" },
          { subject: "", room: "", date: "" },
        ]
      },

      {
        day: 2, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "", room: "", date: "" },
          { subject: "CalcSci", room: "Bloc C CS3", date: "21/10" },
          { subject: "CalcSci", room: "Bloc C CS3", date: "04/11" },
          { subject: "", room: "", date: "" },
        ]
      },

      {
        day: 4, start: "14:30", end: "18:15", type: "tp",
        modules: [
          { subject: "ElnNum2", room: "S42", date: "09/10" },
          { subject: "ElnNum2", room: "S42", date: "23/10" },
          { subject: "ElnNum2", room: "S42", date: "06/11" },
          { subject: "", room: "", date: "" },
        ]
      },

    ]
  },

  // SECOND SCHEDULE: edit this example as needed.
  // "EER5-G2-W41": {
  //   code: "EER5-G2-W41",
  //   title: "EER5 G2",
  //   section: "S5 : EER",
  //   group: "G8",
  //   week: 41,
  //   year: 2026,
  //   sessions: []
  // }
};

// Timeline: 08:00 to 18:30, in 15-minute intervals.
const START_MINUTES = 8 * 60;
const END_MINUTES = 18 * 60 + 30;
const SLOT_COUNT = (END_MINUTES - START_MINUTES) / 15;

let currentCode = "EER5-G2-W40";

function toMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

    const GROUP_COLORS = {
  G1: "#0077cc", // Blue
  G2: "#00a82d", // Green
  G3: "#e63946", // Red
  G4: "#8e44ad", // Purple
  G5: "#e67e22", // Orange
  G6: "#008b8b", // Teal
  G7: "#d63384", // Pink
  G8: "#c00000"  // Dark red
};

function updateBigTitle1(schedule) {
  const title = document.getElementById("bigTitle1");
  if (!title) return;

  const group = String(schedule.group || "")
    .trim()
    .toUpperCase();

  const color = GROUP_COLORS[group] || "#00b923";

  title.textContent = schedule.title || group;
  title.style.setProperty("--group-color", color);
  document.getElementById("sectionTitle1").style.setProperty("--group-color", color);
}

function updateBigTitle2(schedule) {
  const title = document.getElementById("bigTitle2");
  if (!title) return;

  const group = String(schedule.group || "")
    .trim()
    .toUpperCase();

  const color = GROUP_COLORS[group] || "#00b923";

  title.textContent = schedule.title || group;
  title.style.setProperty("--group-color", color);
  document.getElementById("sectionTitle2").style.setProperty("--group-color", color);
}

function validateSchedules() {
  for (const [key, schedule] of Object.entries(SCHEDULES)) {



    if (key !== schedule.code) {
      throw new Error("Schedule key and code do not match: " + key);
    }

    for (const s of schedule.sessions) {
      if (s.day < 0 || s.day > 5) {
        throw new Error("Invalid day in " + key);
      }

      if (
        toMinutes(s.start) < START_MINUTES ||
        toMinutes(s.end) > END_MINUTES ||
        toMinutes(s.start) >= toMinutes(s.end)
      ) {
        throw new Error("Invalid time in " + key);
      }

      if (s.type === "tp") {
        const count = s.modules?.length ?? 0;

        if (count < 2 || count > 6) {
          throw new Error(
            "A TP session must have 2 to 6 modules: " + key
          );
        }

        const usedPositions = new Set();

        s.modules.forEach(module => {
          const position = module.position;

          if (
            position !== undefined &&
            (!Number.isInteger(position) || position < 1 || position > 6)
          ) {
            throw new Error("TP module positions must be between 1 and 6.");
          }

          if (position !== undefined && usedPositions.has(position)) {
            throw new Error("Duplicate TP module position: " + position);
          }

          if (position !== undefined) {
            usedPositions.add(position);
          }
        });
      }
    }
  }
}

function getSchedule() {
  return SCHEDULES[currentCode];
}

function renderTimeHeader1() {
  const header = document.getElementById("timeHeader1");
  header.innerHTML = '<div class="corner"></div>';

  for (let i = 0; i < SLOT_COUNT; i++) {
    const total = START_MINUTES + i * 15;
    const h = String(Math.floor(total / 60)).padStart(2, "0");
    const m = String(total % 60).padStart(2, "0");

    const label = document.createElement("div");
    label.className = "time-label";
    label.textContent = `${h}:${m}`;
    header.appendChild(label);
  }
}

function renderTimeHeader2() {
  const header = document.getElementById("timeHeader2");
  header.innerHTML = '<div class="corner"></div>';

  for (let i = 0; i < SLOT_COUNT; i++) {
    const total = START_MINUTES + i * 15;
    const h = String(Math.floor(total / 60)).padStart(2, "0");
    const m = String(total % 60).padStart(2, "0");

    const label = document.createElement("div");
    label.className = "time-label";
    label.textContent = `${h}:${m}`;
    header.appendChild(label);
  }
}

function createSession(s) {
  const start = toMinutes(s.start);
  const end = toMinutes(s.end);

  const left = (start - START_MINUTES) /
    (END_MINUTES - START_MINUTES) * 100;
  const width = (end - start) /
    (END_MINUTES - START_MINUTES) * 100;

  const element = document.createElement("div");
  element.className = `session ${s.type}`;
  element.style.left = `${left}%`;
  element.style.width = `${width}%`;
  element.style.top = "3px";
  element.style.height = "calc(100% - 6px)";

  const labels = {
    course: "CM",
    td: "TD",
    tp: "TP",
    exit: "Sortie"
  };

  const heading = document.createElement("div");
  heading.className = "session-header";
  heading.textContent =
    `${labels[s.type] || s.type} - ${s.start} - ${s.end}`;
  element.appendChild(heading);

  const body = document.createElement("div");
  body.className = "session-body";

  if (s.type === "tp") {
  body.className = "session-body tp-session-body";
  const modules = document.createElement("div");
  modules.className = "tp-modules";
modules.style.setProperty("--tp-count", s.modules.length);

  modules.style.gridTemplateColumns =
    `repeat(${s.modules.length}, minmax(0, 1fr))`;

  s.modules.forEach((module, index) => {
    const item = document.createElement("div");
    item.className = "tp-module";

    // All modules occupy the same horizontal row.
    item.style.gridRow = "1";
    item.style.gridColumn = String(index + 1);

    const subject = document.createElement("strong");
    subject.textContent = module.subject || "";

    const room = document.createElement("span");
    room.className = "room";
    room.textContent = module.room || "";

    const date = document.createElement("span");
    date.className = "module-date";
    date.textContent = module.date || "";

    item.append(subject, room, date);
    modules.appendChild(item);
  });

  body.appendChild(modules);
} else {
  const subject = document.createElement("strong");
  subject.textContent = s.subject || "";

  const room = document.createElement("span");
  room.className = "room";
  room.textContent = s.room || "";

  body.append(subject, room);
}

  element.appendChild(body);
  return element;
}

function renderSchedule1() {
  const s = getSchedule();

  console.log(s);

  updateBigTitle1(s);

  document.getElementById("topCode1").textContent = s.title;
  document.getElementById("topTitle1").textContent = s.title;
  document.getElementById("sectionTitle1").textContent = s.section;
  document.getElementById("bigTitle1").textContent = "Groupe : " + s.group;
  // document.getElementById("weekInput").value = s.week;
  // document.getElementById("yearInput").value = s.year;

  // document.getElementById("qrImage").src =
  //   "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" +
  //   encodeURIComponent(s.code);

  // document.getElementById("footer").textContent =
  //   `${s.title} — Code : ${s.code} — Semaine ${s.week} — Année ${s.year}`;

  const container = document.getElementById("daysContainer1");
  container.innerHTML = "";

  DAYS.forEach((day, index) => {
    const row = document.createElement("div");
    row.className = "day-row";

    const label = document.createElement("div");
    label.className = "day-label";
    label.textContent = `${day.name} ${day.date}`;

    const content = document.createElement("div");
    content.className = "day-content";

    s.sessions
      .filter(session => session.day === index)
      .sort((a, b) => toMinutes(a.start) - toMinutes(b.start))
      .forEach(session => content.appendChild(createSession(session)));

    row.append(label, content);
    container.appendChild(row);
  });

  // document.title = `${s.code} - Emploi du temps`;
}

function renderSchedule2() {
  const s = getSchedule();

  updateBigTitle2(s);

  document.getElementById("topCode2").textContent = s.title;
  document.getElementById("topTitle2").textContent = s.title;
  document.getElementById("sectionTitle2").textContent = s.section;
  document.getElementById("bigTitle2").textContent = "Groupe : " + s.group;
  // document.getElementById("weekInput").value = s.week;
  // document.getElementById("yearInput").value = s.year;

  // document.getElementById("qrImage").src =
  //   "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" +
  //   encodeURIComponent(s.code);

  // document.getElementById("footer").textContent =
  //   `${s.title} — Code : ${s.code} — Semaine ${s.week} — Année ${s.year}`;

  const container = document.getElementById("daysContainer2");
  container.innerHTML = "";

  DAYS.forEach((day, index) => {
    const row = document.createElement("div");
    row.className = "day-row";

    const label = document.createElement("div");
    label.className = "day-label";
    label.textContent = `${day.name} ${day.date}`;

    const content = document.createElement("div");
    content.className = "day-content";

    s.sessions
      .filter(session => session.day === index)
      .sort((a, b) => toMinutes(a.start) - toMinutes(b.start))
      .forEach(session => content.appendChild(createSession(session)));

    row.append(label, content);
    container.appendChild(row);
  });

  // document.title = `${s.code} - Emploi du temps`;
}

function populateSelector() {
  const select = document.getElementById("scheduleSelect");
  select.innerHTML = "";

  Object.values(SCHEDULES).forEach(s => {
    const option = document.createElement("option");
    option.value = s.code;
    option.textContent = `${s.code} — Semaine ${s.week}`;
    select.appendChild(option);
  });

  select.value = currentCode;
}

function cloneSchedule(source, code, week, year) {
  return {
    ...source,
    code,
    week,
    year,
    sessions: source.sessions.map(session => ({
      ...session,
      modules: session.modules?.map(module => ({ ...module }))
    }))
  };
}

function changeWeek(amount) {
  const s = getSchedule();
  let week = s.week + amount;
  let year = s.year;

  if (week > 53) {
    week = 1;
    year++;
  } else if (week < 1) {
    week = 53;
    year--;
  }

  const code = `${s.title.replace(/\s+/g, "")}-W${week}-${year}`;

  if (!SCHEDULES[code]) {
    SCHEDULES[code] = cloneSchedule(s, code, week, year);
  }

  currentCode = code;
  // populateSelector();
  // renderSchedule();
}

function isoWeek(date) {
  const d = new Date(Date.UTC(
    date.getFullYear(), date.getMonth(), date.getDate()
  ));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);

  const start = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return {
    week: Math.ceil(((d - start) / 86400000 + 1) / 7),
    year: d.getUTCFullYear()
  };
}

function goToCurrentWeek() {
  const now = isoWeek(new Date());
  const s = getSchedule();
  const code = `${s.title.replace(/\s+/g, "")}-W${now.week}-${now.year}`;

  if (!SCHEDULES[code]) {
    SCHEDULES[code] = cloneSchedule(s, code, now.week, now.year);
  }

  currentCode = code;
  // populateSelector();
  // renderSchedule();
}

function downloadJson() {
  const s = getSchedule();
  const blob = new Blob(
    [JSON.stringify(s, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${s.code}.json`;
  a.click();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Events
// document.getElementById("prevWeek").addEventListener("click", () => {
//   changeWeek(-1);
// });

// document.getElementById("nextWeek").addEventListener("click", () => {
//   changeWeek(1);
// });

// document.getElementById("currentWeek").addEventListener("click", goToCurrentWeek);

// document.getElementById("exportPdf").addEventListener("click", () => {
//   window.print();
// });

// document.getElementById("downloadJson").addEventListener("click", downloadJson);

// document.getElementById("scheduleSelect").addEventListener("change", event => {
//   currentCode = event.target.value;
//   renderSchedule();
// });

// document.getElementById("weekInput").addEventListener("change", event => {
//   const s = getSchedule();
//   s.week = Math.max(1, Math.min(53, Number(event.target.value) || 1));
//   renderSchedule();
//   populateSelector();
// });

// document.getElementById("yearInput").addEventListener("change", event => {
//   const s = getSchedule();
//   s.year = Math.max(2020, Math.min(2100, Number(event.target.value) || 2026));
//   renderSchedule();
//   populateSelector();
// });

// Start application
try {
  validateSchedules();
  renderTimeHeader1();
  renderTimeHeader2();

  // populateSelector();
  // renderSchedule1();
  // renderSchedule2();


} catch (error) {
  document.getElementById("daysContainer1").textContent = error.message;
  document.getElementById("daysContainer2").textContent = error.message;
  console.error(error);
}

function scaleElement1() {
  const el = document.querySelector('.timetable-frame-elem1');
  if (!el) return;

  const scale = Math.min(1, document.documentElement.clientWidth / 1700);

  el.style.setProperty('--scale', scale);
}

window.addEventListener('resize', scaleElement1);
window.addEventListener('orientationchange', scaleElement1);

function scaleElement2() {
  const el = document.querySelector('.timetable-frame-elem2');
  if (!el) return;

  const scale = Math.min(1, document.documentElement.clientWidth / 1700);

  el.style.setProperty('--scale', scale);
}

window.addEventListener('resize', scaleElement2);
window.addEventListener('orientationchange', scaleElement2);

scaleElement1();
scaleElement2();
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(169),s=t.n(r),l=t(170),o=t(168),i=t(167);a.default=function(){var e=Object(n.useState)(null),a=e[0],t=e[1],m=Object(n.useState)(null),p=m[0],d=m[1],u=Object(n.useState)({from:null,to:null}),h=u[0],g=u[1],D=Object(n.useState)({from:null,to:null}),y=D[0],E=D[1];return c.a.createElement(o.a,{title:"Core Concepts"},c.a.createElement("p",{className:"Docs__paragraph"},"Now that you've installed the package. It's the time to get familiarized with the core concepts of react-persian-calendar-date-picker. In a nutshell, there are two major components available to import:"),c.a.createElement("ul",{className:"Docs__list"},c.a.createElement("li",null,"1- ",c.a.createElement("code",{className:"custom-code"},"<DatePicker />")," default-exported component which includes an input and a calendar."),c.a.createElement("li",null,"2- ",c.a.createElement("code",{className:"custom-code"},"<Calendar />")," component which is the calendar itself.")),c.a.createElement("p",{className:"Docs__paragraph"},"These components are similar in many cases. ",c.a.createElement("code",{className:"custom-code"},"<DatePicker />")," just includes an extra input in comparison with ",c.a.createElement("code",{className:"custom-code"},"<Calendar />"),". The simple rule is:"),c.a.createElement("p",{className:"Docs__paragraph -marginTop -marginBottom"},c.a.createElement("strong",null," You can use almost every prop on both ",c.a.createElement("code",{className:"custom-code"},"<DatePicker />")," and ",c.a.createElement("code",{className:"custom-code"}," ","<Calendar />")," components.")),c.a.createElement("p",{className:"Docs__paragraph"},"By the way, all the examples provided in this document are implemented using ",c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:" https://reactjs.org/docs/hooks-intro.html"}," React hooks "),"."),c.a.createElement("h2",{className:"Docs__titleSecondary"},"Basic Usage"),c.a.createElement("p",{className:"Docs__paragraph"},"Let's kick things off by providing an example:"),c.a.createElement("div",{className:"Docs__sampleContainer"},c.a.createElement(i.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport DatePicker from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n  return (\n    <DatePicker\n      selectedDay={selectedDay}\n      onChange={setSelectedDay}\n      inputPlaceholder="انتخاب روز"\n    />\n  );\n};\n\nexport default App;\n\n          '),c.a.createElement(s.a,{wrapperClassName:"persianFontWrapper -aboveAll",calendarClassName:"persianFontWrapper",selectedDay:a,inputPlaceholder:"انتخاب روز",onChange:t})),c.a.createElement("p",{className:"Docs__paragraph"},"Without the input:"),c.a.createElement("div",{className:"Docs__sampleContainer"},c.a.createElement(i.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport { Calendar } from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n  return (\n    <Calendar\n      selectedDay={selectedDay}\n      onChange={setSelectedDay}\n    />\n  );\n};\n\nexport default App;\n\n                '),c.a.createElement(r.Calendar,{calendarClassName:"persianFontWrapper",selectedDay:p,onChange:d})),c.a.createElement("p",{className:"Docs__paragraph"},c.a.createElement("code",{className:"custom-code"},"selectedDay")," prop is the value of the date picker, and ",c.a.createElement("code",{className:"custom-code"},"onChange")," is the function which will take care of changing the state using the state hook modifier. All day formats in the picker are like:"),c.a.createElement(i.a,{language:"javascript"},"\nPropTypes.shape({\n  year: PropTypes.number.isRequired,\n  month: PropTypes.number.isRequired,\n  day: PropTypes.number.isRequired,\n})\n              "),c.a.createElement("p",{className:"Docs__paragraph"},"For a more detailed list of props, visit ",c.a.createElement(l.a,{to:"/docs/props-list",className:"Docs__link"},"props list"),"."),c.a.createElement("h2",{className:"Docs__titleSecondary"},"Selecting a Day Range"),c.a.createElement("p",{className:"Docs__paragraph"},"To turn out the picker into a range picker, you need to add ",c.a.createElement("code",{className:"custom-code"},"isDayRange")," prop and replace ",c.a.createElement("code",{className:"custom-code"},"selectedDay")," prop with ",c.a.createElement("code",{className:"custom-code"},"selectedDayRange"),". Remember to change the default state. Here's an example:"),c.a.createElement("div",{className:"Docs__sampleContainer"},c.a.createElement(i.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport { Calendar } from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  // a change in default state\n  const [selectedDayRange, setSelectedDayRange] = useState({\n    from: null,\n    to: null\n  });\n  return (\n    <Calendar\n      selectedDayRange={selectedDayRange} // this is required\n      onChange={setSelectedDayRange}\n      isDayRange // this line too!\n    />\n  );\n};\n\nexport default App;\n\n          '),c.a.createElement(r.Calendar,{calendarClassName:"persianFontWrapper",selectedDayRange:h,onChange:g,isDayRange:!0})),c.a.createElement("p",{className:"Docs__paragraph"},"We've used ",c.a.createElement("code",{className:"custom-code"},"from")," on the default state to indicate the starting point of the day range, and ",c.a.createElement("code",{className:"custom-code"},"to")," for the ending point of the day range. Note that you can replace ",c.a.createElement("code",{className:"custom-code"},"<Calendar />")," with",c.a.createElement("code",{className:"custom-code"},"<DatePicker />")," to have the input along with the calendar:"),c.a.createElement("div",{className:"Docs__sampleContainer"},c.a.createElement(i.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport DatePicker from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  const [selectedDayRange, setSelectedDayRange] = useState({\n    from: null,\n    to: null\n  });\n  return (\n    <DatePicker\n      selectedDayRange={selectedDayRange}\n      onChange={setSelectedDayRange}\n      inputPlaceholder="انتخاب روزهای نمایش"\n      isDayRange\n    />\n  );\n};\n\nexport default App;\n\n          '),c.a.createElement(s.a,{wrapperClassName:"persianFontWrapper -aboveAll",calendarClassName:"persianFontWrapper",selectedDayRange:y,onChange:E,inputPlaceholder:"انتخاب روزهای نمایش",isDayRange:!0})),c.a.createElement("p",{className:"Docs__paragraph"},"So far so good. By now, you should feel pretty comfortable with this picker. In this part, you used ",c.a.createElement("code",{className:"custom-code"},"null")," as the default value for the single date picker and similarly, ",c.a.createElement("code",{className:"custom-code"},"{ from: null, to: null }")," as the default value for the range date picker. In the next part, you'll learn more about ",c.a.createElement(l.a,{className:"Docs__link",to:"/docs/default-values"},"default values"),"."))}},168:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(167);t(148);a.a=function(e){var a=e.title,t=e.children;return c.a.createElement(r.c,null,c.a.createElement(r.d,{title:a+" - react-persian-calendar-date-picker",keywords:[a]}),c.a.createElement("div",{className:"Docs"},c.a.createElement(r.b,null),c.a.createElement("div",{className:"Docs__content"},c.a.createElement("h1",{className:"Docs__title"},a),t)))}}}]);
//# sourceMappingURL=component---src-pages-docs-core-concepts-js-c626868c76b6eca3b108.js.map
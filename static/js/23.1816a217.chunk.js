(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[23],{733:function(e,t,a){"use strict";a.r(t);var i=a(6),r=a(1),n=a.n(r),l=a(31),o=a(4),s=a(10),u=a(731),c=a(539),b=a(710),y=a(37),d=a(0),h=Object(y.a)(u.a)((function(){return{width:300,marginBottom:"16px"}})),p=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}],j=Object(b.a)(),f=function(){var e=n.a.useState(null),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(h,{options:p,getOptionLabel:function(e){return e.label},renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{label:"Combo box",variant:"outlined",fullWidth:!0}))}}),Object(d.jsx)(h,{value:a,onChange:function(e,t){t&&t.inputValue?i({label:t.inputValue}):i(t)},filterOptions:function(e,t){var a=j(e,t);return""!==t.inputValue&&a.push({inputValue:t.inputValue,label:'Add "'.concat(t.inputValue,'"')}),a},options:p,getOptionLabel:function(e){return"string"===typeof e?e:e.inputValue?e.inputValue:e.label},renderOption:function(e){return e.label},style:{width:300},freeSolo:!0,renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{label:"Free solo with text demo",variant:"outlined",fullWidth:!0}))}}),Object(d.jsx)(h,{options:p,getOptionLabel:function(e){return e.label},getOptionDisabled:function(e){return e===p[0]||e===p[2]},renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{label:"Disabled option",variant:"outlined",fullWidth:!0}))}})]})},O=a(30),m=a(23),g=a.n(m),x=a(671),v=a.n(x),T=a(519),A=Object(y.a)(u.a)((function(){return{width:300}}));function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){setTimeout(t,e)}))}function B(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],r=n.a.useState([]),l=Object(s.a)(r,2),u=l[0],b=l[1],y=a&&0===u.length;return n.a.useEffect((function(){var e=!0;if(y)return Object(O.a)(g.a.mark((function t(){var a,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://country.register.gov.uk/records.json?page-size=5000");case 2:return a=t.sent,t.next=5,S(1e3);case 5:return t.next=7,a.json();case 7:i=t.sent,e&&b(Object.keys(i).map((function(e){return i[e].item[0]})));case 9:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[y]),n.a.useEffect((function(){a||b([])}),[a]),Object(d.jsx)(A,{id:"asynchronous-demo",open:a,onOpen:function(){i(!0)},onClose:function(){i(!1)},getOptionLabel:function(e){return e.name},options:u,loading:y,renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{label:"Asynchronous",fullWidth:!0,variant:"outlined",InputProps:Object(o.a)(Object(o.a)({},e.InputProps),{},{endAdornment:Object(d.jsxs)(n.a.Fragment,{children:[y?Object(d.jsx)(T.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var w=a(61),I=a(124),L=a(672),k=function(){var e=Object(w.a)();return Object(d.jsxs)(I.a,{sx:{width:500,"& > * + *":{marginTop:e.spacing(3)}},children:[Object(d.jsx)(u.a,{multiple:!0,id:"tags-standard",options:P,getOptionLabel:function(e){return e.title},defaultValue:[P[13]],renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{variant:"standard",label:"Multiple values",placeholder:"Favorites",fullWidth:!0}))}}),Object(d.jsx)(u.a,{multiple:!0,id:"tags-outlined",options:P,getOptionLabel:function(e){return e.title},defaultValue:[P[13]],filterSelectedOptions:!0,renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{variant:"outlined",label:"filterSelectedOptions",placeholder:"Favorites",fullWidth:!0}))}}),Object(d.jsx)(u.a,{multiple:!0,id:"tags-filled",options:P.map((function(e){return e.title})),defaultValue:[P[13].title],freeSolo:!0,renderTags:function(e,t){return e.map((function(e,a){return Object(d.jsx)(L.a,Object(o.a)({variant:"outlined",label:e},t({index:a})))}))},renderInput:function(e){return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},e),{},{variant:"filled",label:"freeSolo",placeholder:"Favorites",fullWidth:!0}))}})]})},P=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],W=Object(y.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(i.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(i.a)(t,"& .breadcrumb",Object(i.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(d.jsxs)(W,{children:[Object(d.jsx)("div",{className:"breadcrumb",children:Object(d.jsx)(l.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Autocomplete"}]})}),Object(d.jsx)(l.n,{title:"autocomplete combo",children:Object(d.jsx)(f,{})}),Object(d.jsx)(I.a,{py:"12px"}),Object(d.jsx)(l.n,{title:"Asyncronous Autocomplete",children:Object(d.jsx)(B,{})}),Object(d.jsx)(I.a,{py:"12px"}),Object(d.jsx)(l.n,{title:"Asyncronous Autocomplete",children:Object(d.jsx)(k,{})})]})}}}]);
//# sourceMappingURL=23.1816a217.chunk.js.map
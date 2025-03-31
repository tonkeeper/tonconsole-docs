(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7644],{8734:function(t){t.exports=function(t,e){var i=e.prototype,s=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return s.bind(this)(t);var r=this.$utils(),n=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return s.bind(this)(n)}}},285:function(t){var e,i,s,r,n,c,l,d,u,h,f,y,k;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,r=/\d\d/,n=/\d\d?/,c=/\d*[^-_:/,()\s\d]+/,l={},d=function(t){return(t=+t)+(t>68?1900:2e3)},u=function(t){return function(e){this[t]=+e}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],f=function(t){var e=l[t];return e&&(e.indexOf?e:e.s.concat(e.f))},y=function(t,e){var i,s=l.meridiem;if(s){for(var r=1;r<=24;r+=1)if(t.indexOf(s(r,0,e))>-1){i=r>12;break}}else i=t===(e?"pm":"PM");return i},k={A:[c,function(t){this.afternoon=y(t,!1)}],a:[c,function(t){this.afternoon=y(t,!0)}],Q:[s,function(t){this.month=3*(t-1)+1}],S:[s,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,u("seconds")],ss:[n,u("seconds")],m:[n,u("minutes")],mm:[n,u("minutes")],H:[n,u("hours")],h:[n,u("hours")],HH:[n,u("hours")],hh:[n,u("hours")],D:[n,u("day")],DD:[r,u("day")],Do:[c,function(t){var e=l.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var s=1;s<=31;s+=1)e(s).replace(/\[|\]/g,"")===t&&(this.day=s)}],w:[n,u("week")],ww:[r,u("week")],M:[n,u("month")],MM:[r,u("month")],MMM:[c,function(t){var e=f("months"),i=(f("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[c,function(t){var e=f("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,u("year")],YY:[r,function(t){this.year=d(t)}],YYYY:[/\d{4}/,u("year")],Z:h,ZZ:h},function(t,s,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(d=t.parseTwoDigitYear);var n=s.prototype,c=n.parse;n.parse=function(t){var s=t.date,n=t.utc,d=t.args;this.$u=n;var u=d[1];if("string"==typeof u){var h=!0===d[2],f=!0===d[3],y=d[2];f&&(y=d[2]),l=this.$locale(),!h&&y&&(l=r.Ls[y]),this.$d=function(t,s,r,n){try{if(["x","X"].indexOf(s)>-1)return new Date(("X"===s?1e3:1)*t);var c=(function(t){var s,r;s=t,r=l&&l.formats;for(var n=(t=s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,i,s){var n=s&&s.toUpperCase();return i||r[s]||e[s]||r[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(i),c=n.length,d=0;d<c;d+=1){var u=n[d],h=k[u],f=h&&h[0],y=h&&h[1];n[d]=y?{regex:f,parser:y}:u.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,s=0;i<c;i+=1){var r=n[i];if("string"==typeof r)s+=r.length;else{var l=r.regex,d=r.parser,u=t.slice(s),h=l.exec(u)[0];d.call(e,h),t=t.replace(h,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(s)(t),d=c.year,u=c.month,h=c.day,f=c.hours,y=c.minutes,m=c.seconds,p=c.milliseconds,g=c.zone,b=c.week,T=new Date,x=h||(d||u?1:T.getDate()),v=d||T.getFullYear(),_=0;d&&!u||(_=u>0?u-1:T.getMonth());var w,D=f||0,$=y||0,C=m||0,S=p||0;return g?new Date(Date.UTC(v,_,x,D,$,C,S+60*g.offset*1e3)):r?new Date(Date.UTC(v,_,x,D,$,C,S)):(w=new Date(v,_,x,D,$,C,S),b&&(w=n(w).week(b).toDate()),w)}catch(t){return new Date("")}}(s,u,n,r),this.init(),y&&!0!==y&&(this.$L=this.locale(y).$L),(h||f)&&s!=this.format(u)&&(this.$d=new Date("")),l={}}else if(u instanceof Array)for(var m=u.length,p=1;p<=m;p+=1){d[1]=u[p-1];var g=r.apply(this,d);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===m&&(this.$d=new Date(""))}else c.call(this,t)}})},9542:function(t){t.exports=function(t,e,i){var a=function(t){return t.add(4-t.isoWeekday(),"day")},s=e.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,s,r,n=a(this),c=(e=this.isoWeekYear(),r=4-(s=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),s.isoWeekday()>4&&(r+=7),s.add(r,"day"));return n.diff(c,"week")+1},s.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var r=s.startOf;s.startOf=function(t,e){var i=this.$utils(),s=!!i.u(e)||e;return"isoweek"===i.p(t)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):r.bind(this)(t,e)}}},7644:function(t,e,i){"use strict";let s,r,n,c;i.d(e,{diagram:function(){return B}});var l=i(7967),d=i(7484),u=i(9542),h=i(285),f=i(8734),y=i(1835),k=i(4218);i(7856);var m=function(){var o=function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},t=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],e=[1,25],i=[1,26],s=[1,27],r=[1,28],n=[1,29],c=[1,30],l=[1,31],d=[1,9],u=[1,10],h=[1,11],f=[1,12],y=[1,13],k=[1,14],m=[1,15],p=[1,16],g=[1,18],b=[1,19],T=[1,20],x=[1,21],v=[1,22],_=[1,24],w=[1,32],D={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(t,e,i,s,r,n,c){var l=n.length-1;switch(r){case 1:return n[l-1];case 2:case 6:case 7:this.$=[];break;case 3:n[l-1].push(n[l]),this.$=n[l-1];break;case 4:case 5:this.$=n[l];break;case 8:s.setWeekday("monday");break;case 9:s.setWeekday("tuesday");break;case 10:s.setWeekday("wednesday");break;case 11:s.setWeekday("thursday");break;case 12:s.setWeekday("friday");break;case 13:s.setWeekday("saturday");break;case 14:s.setWeekday("sunday");break;case 15:s.setDateFormat(n[l].substr(11)),this.$=n[l].substr(11);break;case 16:s.enableInclusiveEndDates(),this.$=n[l].substr(18);break;case 17:s.TopAxis(),this.$=n[l].substr(8);break;case 18:s.setAxisFormat(n[l].substr(11)),this.$=n[l].substr(11);break;case 19:s.setTickInterval(n[l].substr(13)),this.$=n[l].substr(13);break;case 20:s.setExcludes(n[l].substr(9)),this.$=n[l].substr(9);break;case 21:s.setIncludes(n[l].substr(9)),this.$=n[l].substr(9);break;case 22:s.setTodayMarker(n[l].substr(12)),this.$=n[l].substr(12);break;case 24:s.setDiagramTitle(n[l].substr(6)),this.$=n[l].substr(6);break;case 25:this.$=n[l].trim(),s.setAccTitle(this.$);break;case 26:case 27:this.$=n[l].trim(),s.setAccDescription(this.$);break;case 28:s.addSection(n[l].substr(8)),this.$=n[l].substr(8);break;case 30:s.addTask(n[l-1],n[l]),this.$="task";break;case 31:this.$=n[l-1],s.setClickEvent(n[l-1],n[l],null);break;case 32:this.$=n[l-2],s.setClickEvent(n[l-2],n[l-1],n[l]);break;case 33:this.$=n[l-2],s.setClickEvent(n[l-2],n[l-1],null),s.setLink(n[l-2],n[l]);break;case 34:this.$=n[l-3],s.setClickEvent(n[l-3],n[l-2],n[l-1]),s.setLink(n[l-3],n[l]);break;case 35:this.$=n[l-2],s.setClickEvent(n[l-2],n[l],null),s.setLink(n[l-2],n[l-1]);break;case 36:this.$=n[l-3],s.setClickEvent(n[l-3],n[l-1],n[l]),s.setLink(n[l-3],n[l-2]);break;case 37:this.$=n[l-1],s.setLink(n[l-1],n[l]);break;case 38:case 44:this.$=n[l-1]+" "+n[l];break;case 39:case 40:case 42:this.$=n[l-2]+" "+n[l-1]+" "+n[l];break;case 41:case 43:this.$=n[l-3]+" "+n[l-2]+" "+n[l-1]+" "+n[l]}},table:[{3:1,4:[1,2]},{1:[3]},o(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:e,13:i,14:s,15:r,16:n,17:c,18:l,19:d,20:u,21:h,22:f,23:y,24:k,25:m,26:p,27:g,28:b,30:T,32:x,33:v,34:23,35:_,37:w},o(t,[2,7],{1:[2,1]}),o(t,[2,3]),{9:33,11:17,12:e,13:i,14:s,15:r,16:n,17:c,18:l,19:d,20:u,21:h,22:f,23:y,24:k,25:m,26:p,27:g,28:b,30:T,32:x,33:v,34:23,35:_,37:w},o(t,[2,5]),o(t,[2,6]),o(t,[2,15]),o(t,[2,16]),o(t,[2,17]),o(t,[2,18]),o(t,[2,19]),o(t,[2,20]),o(t,[2,21]),o(t,[2,22]),o(t,[2,23]),o(t,[2,24]),{29:[1,34]},{31:[1,35]},o(t,[2,27]),o(t,[2,28]),o(t,[2,29]),{36:[1,36]},o(t,[2,8]),o(t,[2,9]),o(t,[2,10]),o(t,[2,11]),o(t,[2,12]),o(t,[2,13]),o(t,[2,14]),{38:[1,37],40:[1,38]},o(t,[2,4]),o(t,[2,25]),o(t,[2,26]),o(t,[2,30]),o(t,[2,31],{39:[1,39],40:[1,40]}),o(t,[2,37],{38:[1,41]}),o(t,[2,32],{40:[1,42]}),o(t,[2,33]),o(t,[2,35],{39:[1,43]}),o(t,[2,34]),o(t,[2,36])],defaultActions:{},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],s=[],r=[null],n=[],c=this.table,l="",d=0,u=0,h=n.slice.call(arguments,1),f=Object.create(this.lexer),y={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(y.yy[k]=this.yy[k]);f.setInput(t,y.yy),y.yy.lexer=f,y.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var m=f.yylloc;n.push(m);var p=f.options&&f.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,b,T,x,v,_,w,D,$={};;){if(b=i[i.length-1],this.defaultActions[b]?T=this.defaultActions[b]:(null==g&&(g=function(){var t;return"number"!=typeof(t=s.pop()||f.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}()),T=c[b]&&c[b][g]),void 0===T||!T.length||!T[0]){var C="";for(v in D=[],c[b])this.terminals_[v]&&v>2&&D.push("'"+this.terminals_[v]+"'");C=f.showPosition?"Parse error on line "+(d+1)+":\n"+f.showPosition()+"\nExpecting "+D.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(d+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(C,{text:f.match,token:this.terminals_[g]||g,line:f.yylineno,loc:m,expected:D})}if(T[0]instanceof Array&&T.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+g);switch(T[0]){case 1:i.push(g),r.push(f.yytext),n.push(f.yylloc),i.push(T[1]),g=null,u=f.yyleng,l=f.yytext,d=f.yylineno,m=f.yylloc;break;case 2:if(_=this.productions_[T[1]][1],$.$=r[r.length-_],$._$={first_line:n[n.length-(_||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(_||1)].first_column,last_column:n[n.length-1].last_column},p&&($._$.range=[n[n.length-(_||1)].range[0],n[n.length-1].range[1]]),void 0!==(x=this.performAction.apply($,[l,u,d,y.yy,T[1],r,n].concat(h))))return x;_&&(i=i.slice(0,-1*_*2),r=r.slice(0,-1*_),n=n.slice(0,-1*_)),i.push(this.productions_[T[1]][0]),r.push($.$),n.push($._$),w=c[i[i.length-2]][i[i.length-1]],i.push(w);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return D.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,r=this._currentRules(),n=0;n<r.length;n++)if((i=this._input.match(this.rules[r[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,s){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 40;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 22:return 39;case 23:this.begin("click");break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}},Parser.prototype=D,D.Parser=Parser,new Parser}();m.parser=m,d.extend(u),d.extend(h),d.extend(f);let p="",g="",b="",T=[],x=[],v={},_=[],w=[],D="",$="",C=["active","done","crit","milestone"],S=[],E=!1,M=!1,Y="sunday",I=0,isInvalidDate=function(t,e,i,s){return!s.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},checkTaskDates=function(t,e,i,s){let r,n;if(!i.length||t.manualEndTime)return;r=(r=t.startTime instanceof Date?d(t.startTime):d(t.startTime,e,!0)).add(1,"d"),n=t.endTime instanceof Date?d(t.endTime):d(t.endTime,e,!0);let[c,l]=fixTaskDates(r,n,e,i,s);t.endTime=c.toDate(),t.renderEndTime=l},fixTaskDates=function(t,e,i,s,r){let n=!1,c=null;for(;t<=e;)n||(c=e.toDate()),(n=isInvalidDate(t,i,s,r))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,c]},getStartDate=function(t,e,i){i=i.trim();let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==s){let t=null;for(let e of s.groups.ids.split(" ")){let i=findTaskById(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let r=d(i,e.trim(),!0);if(r.isValid())return r.toDate();{y.l.debug("Invalid date:"+i),y.l.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},parseDuration=function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},getEndDate=function(t,e,i,s=!1){i=i.trim();let r=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null;for(let e of r.groups.ids.split(" ")){let i=findTaskById(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let n=d(i,e.trim(),!0);if(n.isValid())return s&&(n=n.add(1,"d")),n.toDate();let c=d(t),[l,u]=parseDuration(i);if(!Number.isNaN(l)){let t=c.add(l,u);t.isValid()&&(c=t)}return c.toDate()},A=0,parseId=function(t){return void 0===t?"task"+(A+=1):t},compileData=function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let s=i.split(","),r={};getTaskTags(s,r,C);for(let t=0;t<s.length;t++)s[t]=s[t].trim();let n="";switch(s.length){case 1:r.id=parseId(),r.startTime=t.endTime,n=s[0];break;case 2:r.id=parseId(),r.startTime=getStartDate(void 0,p,s[0]),n=s[1];break;case 3:r.id=parseId(s[0]),r.startTime=getStartDate(void 0,p,s[1]),n=s[2]}return n&&(r.endTime=getEndDate(r.startTime,p,n,E),r.manualEndTime=d(n,"YYYY-MM-DD",!0).isValid(),checkTaskDates(r,p,x,T)),r},parseData=function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let s=i.split(","),r={};getTaskTags(s,r,C);for(let t=0;t<s.length;t++)s[t]=s[t].trim();switch(s.length){case 1:r.id=parseId(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:s[0]};break;case 2:r.id=parseId(),r.startTime={type:"getStartDate",startData:s[0]},r.endTime={data:s[1]};break;case 3:r.id=parseId(s[0]),r.startTime={type:"getStartDate",startData:s[1]},r.endTime={data:s[2]}}return r},L=[],F={},findTaskById=function(t){let e=F[t];return L[e]},compileTasks=function(){let t=!0;for(let[e,i]of L.entries())!function(t){let e=L[t],i="";switch(L[t].raw.startTime.type){case"prevTaskEnd":{let t=findTaskById(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=getStartDate(void 0,p,L[t].raw.startTime.startData))&&(L[t].startTime=i)}L[t].startTime&&(L[t].endTime=getEndDate(L[t].startTime,p,L[t].raw.endTime.data,E),L[t].endTime&&(L[t].processed=!0,L[t].manualEndTime=d(L[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),checkTaskDates(L[t],p,x,T))),L[t].processed}(e),t=t&&i.processed;return t},setClass=function(t,e){t.split(",").forEach(function(t){let i=findTaskById(t);void 0!==i&&i.classes.push(e)})},setClickFun=function(t,e,i){if("loose"!==(0,y.c)().securityLevel||void 0===e)return;let s=[];if("string"==typeof i){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<s.length;t++){let e=s[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),s[t]=e}}0===s.length&&s.push(t),void 0!==findTaskById(t)&&pushFun(t,()=>{y.u.runFunc(e,...s)})},pushFun=function(t,e){S.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},O={getConfig:()=>(0,y.c)().gantt,clear:function(){_=[],w=[],D="",S=[],A=0,s=void 0,r=void 0,L=[],p="",g="",$="",c=void 0,b="",T=[],x=[],E=!1,M=!1,I=0,v={},(0,y.v)(),Y="sunday"},setDateFormat:function(t){p=t},getDateFormat:function(){return p},enableInclusiveEndDates:function(){E=!0},endDatesAreInclusive:function(){return E},enableTopAxis:function(){M=!0},topAxisEnabled:function(){return M},setAxisFormat:function(t){g=t},getAxisFormat:function(){return g},setTickInterval:function(t){c=t},getTickInterval:function(){return c},setTodayMarker:function(t){b=t},getTodayMarker:function(){return b},setAccTitle:y.s,getAccTitle:y.g,setDiagramTitle:y.q,getDiagramTitle:y.t,setDisplayMode:function(t){$=t},getDisplayMode:function(){return $},setAccDescription:y.b,getAccDescription:y.a,addSection:function(t){D=t,_.push(t)},getSections:function(){return _},getTasks:function(){let t=compileTasks(),e=0;for(;!t&&e<10;)t=compileTasks(),e++;return w=L},addTask:function(t,e){let i={section:D,type:D,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=parseData(r,e);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=r,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.order=I,I++;let n=L.push(i);r=i.id,F[i.id]=n-1},findTaskById,addTaskOrg:function(t,e){let i={section:D,type:D,description:t,task:t,classes:[]},r=compileData(s,e);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,s=i,w.push(i)},setIncludes:function(t){T=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return T},setExcludes:function(t){x=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return x},setClickEvent:function(t,e,i){t.split(",").forEach(function(t){setClickFun(t,e,i)}),setClass(t,"clickable")},setLink:function(t,e){let i=e;"loose"!==(0,y.c)().securityLevel&&(i=(0,l.Nm)(e)),t.split(",").forEach(function(t){void 0!==findTaskById(t)&&(pushFun(t,()=>{window.open(i,"_self")}),v[t]=i)}),setClass(t,"clickable")},getLinks:function(){return v},bindFunctions:function(t){S.forEach(function(e){e(t)})},parseDuration,isInvalidDate,setWeekday:function(t){Y=t},getWeekday:function(){return Y}};function getTaskTags(t,e,i){let s=!0;for(;s;)s=!1,i.forEach(function(i){let r="^\\s*"+i+"\\s*$",n=new RegExp(r);t[0].match(n)&&(e[i]=!0,t.shift(1),s=!0)})}let W={monday:k.Ox9,tuesday:k.YDX,wednesday:k.EFj,thursday:k.Igq,friday:k.y2j,saturday:k.LqH,sunday:k.Zyz},getMaxIntersections=(t,e)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),r=0;for(let t of s)for(let s=0;s<i.length;s++)if(t.startTime>=i[s]){i[s]=t.endTime,t.order=s+e,s>r&&(r=s);break}return r},B={parser:m,db:O,renderer:{setConf:function(){y.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,i,s){let r;let c=(0,y.c)().gantt,l=(0,y.c)().securityLevel;"sandbox"===l&&(r=(0,k.Ys)("#i"+e));let u="sandbox"===l?(0,k.Ys)(r.nodes()[0].contentDocument.body):(0,k.Ys)("body"),h="sandbox"===l?r.nodes()[0].contentDocument:document,f=h.getElementById(e);void 0===(n=f.parentElement.offsetWidth)&&(n=1200),void 0!==c.useWidth&&(n=c.useWidth);let m=s.db.getTasks(),p=[];for(let t of m)p.push(t.type);p=function(t){let e={},i=[];for(let s=0,r=t.length;s<r;++s)Object.prototype.hasOwnProperty.call(e,t[s])||(e[t[s]]=!0,i.push(t[s]));return i}(p);let g={},b=2*c.topPadding;if("compact"===s.db.getDisplayMode()||"compact"===c.displayMode){let t={};for(let e of m)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let s=getMaxIntersections(t[i],e)+1;e+=s,b+=s*(c.barHeight+c.barGap),g[i]=s}}else for(let t of(b+=m.length*(c.barHeight+c.barGap),p))g[t]=m.filter(e=>e.type===t).length;f.setAttribute("viewBox","0 0 "+n+" "+b);let T=u.select(`[id="${e}"]`),x=(0,k.Xf)().domain([(0,k.VV$)(m,function(t){return t.startTime}),(0,k.Fp7)(m,function(t){return t.endTime})]).rangeRound([0,n-c.leftPadding-c.rightPadding]);m.sort(function(t,e){let i=t.startTime,s=e.startTime,r=0;return i>s?r=1:i<s&&(r=-1),r}),function(t,i,r){let n=c.barHeight,l=n+c.barGap,u=c.topPadding,f=c.leftPadding;(0,k.BYU)().domain([0,p.length]).range(["#00B9FA","#F95002"]).interpolate(k.JHv),function(t,e,i,r,n,l,u,h){let f,k;if(0===u.length&&0===h.length)return;for(let{startTime:t,endTime:e}of l)(void 0===f||t<f)&&(f=t),(void 0===k||e>k)&&(k=e);if(!f||!k)return;if(d(k).diff(d(f),"year")>5){y.l.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let m=s.db.getDateFormat(),p=[],g=null,b=d(f);for(;b.valueOf()<=k;)s.db.isInvalidDate(b,m,u,h)?g?g.end=b:g={start:b,end:b}:g&&(p.push(g),g=null),b=b.add(1,"d");let v=T.append("g").selectAll("rect").data(p).enter();v.append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return x(t.start)+i}).attr("y",c.gridLineStartPadding).attr("width",function(t){let e=t.end.add(1,"day");return x(e)-x(t.start)}).attr("height",n-e-c.gridLineStartPadding).attr("transform-origin",function(e,s){return(x(e.start)+i+.5*(x(e.end)-x(e.start))).toString()+"px "+(s*t+.5*n).toString()+"px"}).attr("class","exclude-range")}(l,u,f,0,r,t,s.db.getExcludes(),s.db.getIncludes()),function(t,e,i,r){let n=(0,k.LLu)(x).tickSize(-r+e+c.gridLineStartPadding).tickFormat((0,k.i$Z)(s.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d")),l=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||c.tickInterval);if(null!==l){let t=l[1],e=l[2],i=s.db.getWeekday()||c.weekday;switch(e){case"millisecond":n.ticks(k.U8T.every(t));break;case"second":n.ticks(k.S1K.every(t));break;case"minute":n.ticks(k.Z_i.every(t));break;case"hour":n.ticks(k.WQD.every(t));break;case"day":n.ticks(k.rr1.every(t));break;case"week":n.ticks(W[i].every(t));break;case"month":n.ticks(k.F0B.every(t))}}if(T.append("g").attr("class","grid").attr("transform","translate("+t+", "+(r-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||c.topAxis){let i=(0,k.F5q)(x).tickSize(-r+e+c.gridLineStartPadding).tickFormat((0,k.i$Z)(s.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d"));if(null!==l){let t=l[1],e=l[2],r=s.db.getWeekday()||c.weekday;switch(e){case"millisecond":i.ticks(k.U8T.every(t));break;case"second":i.ticks(k.S1K.every(t));break;case"minute":i.ticks(k.Z_i.every(t));break;case"hour":i.ticks(k.WQD.every(t));break;case"day":i.ticks(k.rr1.every(t));break;case"week":i.ticks(W[r].every(t));break;case"month":i.ticks(k.F0B.every(t))}}T.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(f,u,0,r),function(t,i,r,n,l,d,u){let h=[...new Set(t.map(t=>t.order))],f=h.map(e=>t.find(t=>t.order===e));T.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+r-2}).attr("width",function(){return u-c.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of p.entries())if(t.type===i)return"section section"+e%c.numberSectionStyles;return"section section0"});let m=T.append("g").selectAll("rect").data(t).enter(),g=s.db.getLinks();m.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?x(t.startTime)+n+.5*(x(t.endTime)-x(t.startTime))-.5*l:x(t.startTime)+n}).attr("y",function(t,e){return t.order*i+r}).attr("width",function(t){return t.milestone?l:x(t.renderEndTime||t.endTime)-x(t.startTime)}).attr("height",l).attr("transform-origin",function(t,e){return e=t.order,(x(t.startTime)+n+.5*(x(t.endTime)-x(t.startTime))).toString()+"px "+(e*i+r+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,s]of p.entries())t.type===s&&(i=e%c.numberSectionStyles);let s="";return t.active?t.crit?s+=" activeCrit":s=" active":t.done?s=t.crit?" doneCrit":" done":t.crit&&(s+=" crit"),0===s.length&&(s=" task"),t.milestone&&(s=" milestone "+s),"task"+(s+=i+" "+e)}),m.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",c.fontSize).attr("x",function(t){let e=x(t.startTime),i=x(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(x(t.endTime)-x(t.startTime))-.5*l),t.milestone&&(i=e+l);let s=this.getBBox().width;return s>i-e?i+s+1.5*c.leftPadding>u?e+n-5:i+n+5:(i-e)/2+e+n}).attr("y",function(t,e){return t.order*i+c.barHeight/2+(c.fontSize/2-2)+r}).attr("text-height",l).attr("class",function(t){let e=x(t.startTime),i=x(t.endTime);t.milestone&&(i=e+l);let s=this.getBBox().width,r="";t.classes.length>0&&(r=t.classes.join(" "));let n=0;for(let[e,i]of p.entries())t.type===i&&(n=e%c.numberSectionStyles);let d="";return(t.active&&(d=t.crit?"activeCritText"+n:"activeText"+n),t.done?d=t.crit?d+" doneCritText"+n:d+" doneText"+n:t.crit&&(d=d+" critText"+n),t.milestone&&(d+=" milestoneText"),s>i-e)?i+s+1.5*c.leftPadding>u?r+" taskTextOutsideLeft taskTextOutside"+n+" "+d:r+" taskTextOutsideRight taskTextOutside"+n+" "+d+" width-"+s:r+" taskText taskText"+n+" "+d+" width-"+s});let b=(0,y.c)().securityLevel;if("sandbox"===b){let t;t=(0,k.Ys)("#i"+e);let i=t.nodes()[0].contentDocument;m.filter(function(t){return void 0!==g[t.id]}).each(function(t){var e=i.querySelector("#"+t.id),s=i.querySelector("#"+t.id+"-text");let r=e.parentNode;var n=i.createElement("a");n.setAttribute("xlink:href",g[t.id]),n.setAttribute("target","_top"),r.appendChild(n),n.appendChild(e),n.appendChild(s)})}}(t,l,u,f,n,0,i),function(t,e){let i=0,s=Object.keys(g).map(t=>[t,g[t]]);T.append("g").selectAll("text").data(s).enter().append(function(t){let e=t[0].split(y.e.lineBreakRegex),i=-(e.length-1)/2,s=h.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,r]of(s.setAttribute("dy",i+"em"),e.entries())){let e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=r,s.appendChild(e)}return s}).attr("x",10).attr("y",function(r,n){if(!(n>0))return r[1]*t/2+e;for(let c=0;c<n;c++)return i+=s[n-1][1],r[1]*t/2+i*t+e}).attr("font-size",c.sectionFontSize).attr("class",function(t){for(let[e,i]of p.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%c.numberSectionStyles;return"sectionTitle"})}(l,u),function(t,e,i,r){let n=s.db.getTodayMarker();if("off"===n)return;let l=T.append("g").attr("class","today"),d=new Date,u=l.append("line");u.attr("x1",x(d)+t).attr("x2",x(d)+t).attr("y1",c.titleTopMargin).attr("y2",r-c.titleTopMargin).attr("class","today"),""!==n&&u.attr("style",n.replace(/,/g,";"))}(f,0,0,r)}(m,n,b),(0,y.i)(T,b,n,c.useMaxWidth),T.append("text").text(s.db.getDiagramTitle()).attr("x",n/2).attr("y",c.titleTopMargin).attr("class","titleText")}},styles:t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`}}}]);
/** Find UTC candidates for a modern local minute using the runtime's IANA data. */
export function resolveLocalMinute(local, timeZone) {
  const m=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(local);
  if(!m) throw new Error('Expected YYYY-MM-DDTHH:mm');
  const [year,month,day,hour,minute]=m.slice(1).map(Number);
  const target=Date.UTC(year,month-1,day,hour,minute);
  const check=new Date(target);
  if(year<1970||year>2100||check.getUTCFullYear()!==year||check.getUTCMonth()!==month-1||check.getUTCDate()!==day||hour>23||minute>59) throw new Error('Valid dates from 1970 through 2100 only');
  const formatter=new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
  const matches=[];
  // Search the UTC window around the nominal local minute. No DST rule is invented.
  for(let offset=-14*60;offset<=14*60;offset++){
    const utc=target-offset*60000;
    const p=Object.fromEntries(formatter.formatToParts(new Date(utc)).map(x=>[x.type,x.value]));
    if(+p.year===year&&+p.month===month&&+p.day===day&&+p.hour===hour&&+p.minute===minute) matches.push({utc:new Date(utc).toISOString(),offsetMinutes:offset});
  }
  matches.sort((a,b)=>a.utc.localeCompare(b.utc));
  return {local,timeZone,status:matches.length===0?'gap':matches.length===1?'unique':'ambiguous',candidates:matches};
}
if(process.argv[1]&&import.meta.url===new URL('file:///'+process.argv[1].replaceAll('\\','/').replace(/^\//,'')).href){
  try{console.log(JSON.stringify(resolveLocalMinute(process.argv[2],process.argv[3]),null,2));}catch(e){console.error(e.message);process.exitCode=1;}
}

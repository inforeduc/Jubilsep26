const state={records:null};
const $=s=>document.querySelector(s);
const form=$('#searchForm'), input=$('#cedula'), result=$('#result');
function normalizeCedula(value){return String(value||'').replace(/\D/g,'');}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function tipoLabel(t){return ({D:'Docente',O:'Obrero',A:'Administrativo'})[t]||t;}
function render(record,query){
  if(!record){result.innerHTML=`<div class="not-found"><strong>No se encontró la cédula ${escapeHTML(query)}.</strong><span>Verifica el número e inténtalo nuevamente. La búsqueda corresponde únicamente a los registros contenidos en la resolución indicada en esta página.</span></div>`;return;}
  const cls={D:'docente',O:'obrero',A:'admin'}[record.tipo]||'docente';
  result.innerHTML=`<div class="result-card"><div class="found-label">Registro encontrado · N.º ${record.n}</div><div class="person-name">${escapeHTML(record.nombre)}</div><div class="details"><div class="detail"><span>Cédula</span><strong>${escapeHTML(record.cedula)}</strong></div><div class="detail"><span>Estado / ubicación</span><strong>${escapeHTML(record.estado)}</strong></div><div class="detail"><span>Condición laboral</span><strong class="condition"><span class="badge ${cls}">${escapeHTML(record.tipo)}</span>${tipoLabel(record.tipo)}</strong></div></div></div>`;
}
async function loadRecords(){
  if(state.records)return state.records;
  const r=await fetch('data/jubilados.json',{cache:'no-cache'});
  if(!r.ok)throw new Error('No se pudo cargar la base de datos.');
  state.records=await r.json();
  return state.records;
}
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const q=normalizeCedula(input.value);
  if(!q){result.innerHTML='<div class="not-found"><strong>Escribe un número de cédula.</strong><span>Usa solo números o escribe la cédula con puntos.</span></div>';return;}
  result.innerHTML='<div class="result-card">Consultando…</div>';
  try{const records=await loadRecords();const record=records.find(x=>x.cedula===q);render(record,q);}catch(err){result.innerHTML='<div class="not-found"><strong>No se pudo cargar la consulta.</strong><span>Abre el sitio mediante GitHub Pages o un servidor web local.</span></div>';}
});
input.addEventListener('input',()=>{if(input.value.length>14)input.value=input.value.slice(0,14)});

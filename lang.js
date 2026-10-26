// Site language. Chinese only for mainland China, Singapore and plain Simplified Chinese browsers;
// Traditional-Chinese locales (zh-TW, zh-HK, zh-MO, zh-Hant) and everything else get English.
// A choice made with the 中文 / EN toggle is remembered and wins over the browser setting.
window.siteLang = (() => {
  try { const s = localStorage.getItem("lang"); if (s === "zh" || s === "en") return s; } catch (e) { /* no storage */ }
  const l = (navigator.languages && navigator.languages[0]) || navigator.language || "";
  return /^zh(-(cn|sg|hans)(-.*)?)?$/i.test(l) ? "zh" : "en";
})();
document.documentElement.lang = window.siteLang === "zh" ? "zh-CN" : "en";
window.setSiteLang = (l) => { try { localStorage.setItem("lang", l); } catch (e) { /* session only */ } location.reload(); };
// Replace [data-i18n] elements with the English strings when the site is in English
window.applyI18n = (dict) => {
  if (window.siteLang !== "en") return;
  document.querySelectorAll("[data-i18n]").forEach((el) => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":"); if (dict[key] != null) el.setAttribute(attr, dict[key]);
  });
};
// A toggle button: shows the language you would switch to
window.langButton = (el) => {
  el.textContent = window.siteLang === "zh" ? "EN" : "中文";
  el.title = window.siteLang === "zh" ? "Switch to English" : "切换到中文";
  el.onclick = () => window.setSiteLang(window.siteLang === "zh" ? "en" : "zh");
};

async function extractDomains(text) {
  const domainSet = new Set();
  const regex = /\b((?:[a-zA-Z0-9-]+\.)+(?:[a-zA-Z]{2,}))\b/g;

  let match;
  while ((match = regex.exec(text)) !== null) {
    domainSet.add(match[1].toLowerCase());
  }

  return domainSet;
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

async function fetchAndExtractDomains(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return await extractDomains(html);
  } catch (err) {
    console.error("Fetch failed:", err);
    alert("Failed to fetch the URL. Check CORS or the link format.");
    return new Set();
  }
}

document.getElementById("extract-btn").addEventListener("click", async () => {
  const input = document.getElementById("input-text").value.trim();
  let finalSet = new Set();

  if (isValidURL(input)) {
    const fromURL = await fetchAndExtractDomains(input);
    fromURL.forEach(domain => finalSet.add(domain));
  } else {
    const fromText = await extractDomains(input);
    fromText.forEach(domain => finalSet.add(domain));
  }

  const output = Array.from(finalSet).sort();
  document.getElementById("output-text").value = output.join("\n");
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("input-text").value = "";
  document.getElementById("output-text").value = "";
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const output = document.getElementById("output-text");
  output.select();
  document.execCommand("copy");
});

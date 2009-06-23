function load_compile_form() {
				if(wgAction != 'edit') {
								/&action=purge/.test(document.location) ? simple_href() : complex_href();
				} else if(!/compile=true/.test(document.location)) {
								simple_href();
				}

				function simple_href() {
								document.location = document.location.href.replace(/action=purge/, 'action=edit')+"&compile=true";
				}
				function complex_href() {
								var page = document.location.href.replace(/.+\/(.+)/, '$1');
								document.location = "/wiki/index.php?title="+page+"&action=edit&compile=true";
				}
}
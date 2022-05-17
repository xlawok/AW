+++
body_class = "kontakt"
description = "O agencji wrocławskiej dane kontaktowe"
keywords = ""
og_image = ""
robots = "index follow"
slug = "kontakt"
title = "Kontakt - SEO Wrocław - 792 789 836 | Agencja Wrocławska"
[menu.main]
name = "Kontakt"
weight = 6
[[sections]]
banner_bg_for_center = ""
banner_bg_for_center_left = ""
banner_bg_for_center_left_dark = ""
banner_bg_for_center_right = ""
banner_bg_for_center_right_dark = ""
banner_bg_no_img = ""
banner_bg_no_img_dark = ""
banner_bg_no_img_dark_num = ""
banner_bg_no_img_num = ""
banner_center_img = ""
banner_cta_title = ""
banner_cta_title_num = ""
banner_cta_url = []
banner_cta_url_num = ""
banner_form_html = "<div id=\"my-form-status\"></div>\n<form id=\"contactform\" action=\"https://formspree.io/f/xdoynvwe\" method=\"POST\">\n<div class='input-cnt'>\n <input required name=\"email\" type=\"email\" id=\"email\" placeholder=\"Adres e-mail\"><label for='email'> Adres e-mail</label>\n</div>\n<div class='input-cnt'>\n    <input name=\"www\" type=\"text\" id=\"www\" placeholder=\"Adres strony www\"><label for='www'>Adres strony www</label>\n</div>\n<div class='input-cnt'>\n    <input  required name=\"phone\" type=\"tel\" id=\"phone\" placeholder=\"Numer telefonu\"><label for='phone'>Numer telefonu</label>\n   </div>\n   <div>\n<span class='radio-cnt-title'>Wybierz temat zapytania</span>\n <div class='form-radio'>\n \n  <input type=\"radio\" id=\"positoning\" name=\"question\" value=\"pozycjonowanie\"\n         ><label for=\"positoning\">Pozycjonowanie\n </label>\n</div>\n<div class='form-radio'>\n\n  <input type=\"radio\" id=\"social-media\" name=\"question\" value=\"social media\"\n         ><label for=\"social-media\">\nSocial media </label>\n</div>\n <div class='form-radio'>\n \n  <input type=\"radio\" id=\"google-adwords\" name=\"question\" value=\"google adwrods\"\n         ><label for=\"google-adwords\">Google AdWords\n </label>\n</div>\n</div>\n\n <input type=\"text\" name=\"_gotcha\" style=\"display:none\" />\n\n    <button  type=\"submit\">Wyślij zapytanie</button>\n<div class='rodo'>\n<input id='rodo-accept' type='checkbox' required name='rodo-accept' value='accept'/>\n<label for='rodo-accept'>Administratorem Twoich danych osobowych, czyli podmiotem decydującym o celach i sposobach przetwarzania Twoich danych osobowych jest Agencja Wrocławska. Informujemy, że podanie danych osobowych zawartych w formularzu jest dobrowolne, ale niezbędne do skutecznego nawiązania kontaktu z Administratorem, jak również przysługują Ci prawa dostępu do Twoich danych osobowych, ich zmiany (w tym aktualizacji), a także pozostałe prawa opisane w Polityce prywatności. W Polityce prywatności znajdują się także szczegółowe informację w zakresie praw i obowiązków Administratora.\n</label>\n</div>\n</form>\n\n<script>\n    var form = document.getElementById(\"contactform\");\n    if(form){\n    async function handleSubmit(event) {\n      event.preventDefault();\n      var status = document.getElementById(\"my-form-status\");\n      var data = new FormData(event.target);\n      fetch(event.target.action, {\n        method: form.method,\n        body: data,\n        headers: {\n            'Accept': 'application/json'\n        }\n      }).then(response => {\n        status.innerHTML = \"Dziękujemy skontaktujemy się z Tobą niebawem.\";\n        form.reset()\n      }).catch(error => {\n        status.innerHTML = \"Oops! Nie udało się wysłać formularza!\"\n      });\n    }\n    form.addEventListener(\"submit\", handleSubmit)\n}\n</script>"
banner_form_html_no_img = ""
banner_form_html_no_img_num = ""
banner_form_script = ""
banner_form_script_no_img = ""
banner_form_script_no_img_num = ""
banner_img = "/uploads/aw-wroclaw-2-kontakt.jpg"
banner_list_gruop = []
banner_type = "wide_img"
dymki_z_tekstem = []
formularz_wylaczony = false
krotki_tekst_pod_odnosnikiem = ""
naglowek_formularza = "Zamów bezpłatną wycenę w 24h!"
naglowek_formularza_no_img = ""
naglowek_formularza_no_img_num = ""
opis_banner = ""
opis_banner_num = ""
otworz_modal = ""
otworz_modal_num = ""
tekst_pod_naglowkiem = ""
template = "banner"
[[sections.banner_header_cnt.header_repeater]]
block_tag_type = "h1"
bold_txt = "bardzo gruby"
break_line = true
color_txt = "biały"
ornament = "brak"
txt_block = "Zapraszamy"
txt_block_size = "XXL"
underline = false
[[sections.banner_header_cnt.header_repeater]]
block_tag_type = "h1"
bold_txt = "bardzo gruby"
break_line = false
color_txt = "biały"
ornament = "brak"
txt_block = "do kontaktu"
txt_block_size = "XXL"
underline = false
[[sections.banner_slogan.header_repeater]]
block_tag_type = "div"
bold_txt = "normalny"
break_line = false
color_txt = "biały"
ornament = "brak"
txt_block = "Pozwól przygotować spersonalizowaną, profesjonalną strategię marketingową oraz ofertę współpracy dla Twojej firmy. Zróbmy wspólnie krok w kierunku sukcesu!"
txt_block_size = "S"
underline = false
[sections.box_pod_zdj_ciem]
header_repeater = []
kolumny = []
opis = ""
[[sections]]
template = "sekcja-strona-kontakt-dane-kontaktowe"
[sections.contact_data_contact_group]
embed_mapka_google = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4213.185083777265!2d17.037112943370676!3d51.10523426511334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc372231635e5%3A0x3004a0fd5f69f7cf!2sAgencja%20Wroc%C5%82awska%20-%20SEO%2FSEM!5e0!3m2!1spl!2spl!4v1616422558316!5m2!1spl!2spl\" width=\"800\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>"
[sections.contact_data_contact_group.lewa_kolumna]
adres_email = "j.horbacz@agencjawroclawska.pl"
dane_rejestrowe = "NIP: 8971882219 <br>REGON: 386840471 <br>KRS 0000856500 <br>Sąd Rejonowy dla Wrocław - Fabryczna <br>VI Wydział Gospodarczy <br>Krajowego Rejestru Sądowego"
imi__i_nazwisko_szefa = "Jakub Horbacz"
numer_telefonu_bez_spacji_do_linkowania = "+48792789836"
numer_telefonu_szefa = "+48 792 789 836"
stanowisko = "Head of SEO"
zdj_cie_szefa = "/uploads/jakub1.jpg"
[[sections.contact_data_contact_group.lewa_kolumna.dane_adresowe]]
adres_do_linkowania = ""
if_link = "none"
wiersz_danych_adresowych = "Agencja Wrocławska Sp. z o.o."
[[sections.contact_data_contact_group.lewa_kolumna.dane_adresowe]]
adres_do_linkowania = ""
if_link = "none"
wiersz_danych_adresowych = "ul. Dmowskiego 17"
[[sections.contact_data_contact_group.lewa_kolumna.dane_adresowe]]
adres_do_linkowania = ""
if_link = "none"
wiersz_danych_adresowych = "50-203 Wrocław"
[[sections.contact_data_contact_group.lewa_kolumna.dane_adresowe]]
adres_do_linkowania = "+48734131950"
if_link = "tel"
wiersz_danych_adresowych = "+48 734 131 950"
[[sections.contact_data_contact_group.lewa_kolumna.dane_adresowe]]
adres_do_linkowania = "kontakt@agencjawroclawska.pl"
if_link = "mail"
wiersz_danych_adresowych = "kontakt@agencjawroclawska.pl"
[[sections.contact_data_contact_group.lewa_kolumna.header_repeater]]
block_tag_type = "h2"
bold_txt = "gruby"
break_line = false
color_txt = "czarny"
ornament = "brak"
txt_block = "Dane rejestrowe"
txt_block_size = "MD"
underline = false

+++

$(document).ready(function () {
	var data = $.parseJSON(`[{"id":1,"first_name":"Kathleen","last_name":"Powell","email":"kpowell0@taobao.com","gender":"Female","phone":"216-(294)520-9142"},
{"id":2,"first_name":"Gary","last_name":"Smith","email":"gsmith1@fastcompany.com","gender":"Male","phone":"86-(529)162-5964"},
{"id":3,"first_name":"Frank","last_name":"Greene","email":"fgreene2@edublogs.org","gender":"Male","phone":"679-(500)642-6625"},
{"id":4,"first_name":"Samuel","last_name":"Washington","email":"swashington3@intel.com","gender":"Male","phone":"86-(104)934-8413"},
{"id":5,"first_name":"Ann","last_name":"Davis","email":"adavis4@toplist.cz","gender":"Female","phone":"51-(945)619-4257"},
{"id":6,"first_name":"Arthur","last_name":"Collins","email":"acollins5@scientificamerican.com","gender":"Male","phone":"505-(320)371-4359"},
{"id":7,"first_name":"Rebecca","last_name":"Freeman","email":"rfreeman6@wikipedia.org","gender":"Female","phone":"86-(721)118-0186"},
{"id":8,"first_name":"Larry","last_name":"Day","email":"lday7@lycos.com","gender":"Male","phone":"967-(986)983-1796"},
{"id":9,"first_name":"Martin","last_name":"Fernandez","email":"mfernandez8@marriott.com","gender":"Male","phone":"46-(620)555-5766"},
{"id":10,"first_name":"Marilyn","last_name":"Peterson","email":"mpeterson9@symantec.com","gender":"Female","phone":"86-(252)423-4250"},
{"id":11,"first_name":"Alan","last_name":"Cox","email":"acoxa@4shared.com","gender":"Male","phone":"33-(898)806-0121"},
{"id":12,"first_name":"Joshua","last_name":"Watkins","email":"jwatkinsb@imageshack.us","gender":"Male","phone":"48-(950)389-9445"},
{"id":13,"first_name":"Pamela","last_name":"Sims","email":"psimsc@elpais.com","gender":"Female","phone":"86-(956)756-2617"},
{"id":14,"first_name":"Sean","last_name":"Smith","email":"ssmithd@examiner.com","gender":"Male","phone":"373-(354)243-9874"},
{"id":15,"first_name":"Kathleen","last_name":"Ramos","email":"kramose@bloomberg.com","gender":"Female","phone":"62-(177)720-9231"},
{"id":16,"first_name":"Catherine","last_name":"Fox","email":"cfoxf@goodreads.com","gender":"Female","phone":"62-(683)358-3399"},
{"id":17,"first_name":"Scott","last_name":"Payne","email":"spayneg@blogspot.com","gender":"Male","phone":"20-(374)112-4146"},
{"id":18,"first_name":"James","last_name":"Little","email":"jlittleh@simplemachines.org","gender":"Male","phone":"58-(296)477-3117"},
{"id":19,"first_name":"Mildred","last_name":"Ferguson","email":"mfergusoni@state.tx.us","gender":"Female","phone":"60-(966)184-8363"},
{"id":20,"first_name":"Heather","last_name":"Gilbert","email":"hgilbertj@bloomberg.com","gender":"Female","phone":"46-(378)432-9226"},
{"id":21,"first_name":"Keith","last_name":"Hudson","email":"khudsonk@japanpost.jp","gender":"Male","phone":"62-(354)541-2568"},
{"id":22,"first_name":"Tina","last_name":"Rivera","email":"triveral@gravatar.com","gender":"Female","phone":"374-(195)861-4945"},
{"id":23,"first_name":"George","last_name":"Hawkins","email":"ghawkinsm@gravatar.com","gender":"Male","phone":"880-(143)843-9192"},
{"id":24,"first_name":"Virginia","last_name":"Henry","email":"vhenryn@smugmug.com","gender":"Female","phone":"55-(799)730-9484"},
{"id":25,"first_name":"Marilyn","last_name":"Ramirez","email":"mramirezo@ovh.net","gender":"Female","phone":"503-(266)797-1682"},
{"id":26,"first_name":"Wanda","last_name":"Mcdonald","email":"wmcdonaldp@auda.org.au","gender":"Female","phone":"380-(930)839-7487"},
{"id":27,"first_name":"Louise","last_name":"Gordon","email":"lgordonq@drupal.org","gender":"Female","phone":"62-(147)469-1019"},
{"id":28,"first_name":"Ralph","last_name":"Sanders","email":"rsandersr@hatena.ne.jp","gender":"Male","phone":"351-(351)396-6314"},
{"id":29,"first_name":"William","last_name":"Fowler","email":"wfowlers@usa.gov","gender":"Male","phone":"86-(119)968-5298"},
{"id":30,"first_name":"Carol","last_name":"James","email":"cjamest@hp.com","gender":"Female","phone":"242-(711)746-1717"},
{"id":31,"first_name":"Lawrence","last_name":"Miller","email":"lmilleru@newyorker.com","gender":"Male","phone":"7-(816)222-0963"},
{"id":32,"first_name":"Heather","last_name":"Cunningham","email":"hcunninghamv@unesco.org","gender":"Female","phone":"998-(570)710-6249"},
{"id":33,"first_name":"Stephanie","last_name":"Meyer","email":"smeyerw@samsung.com","gender":"Female","phone":"30-(903)991-4917"},
{"id":34,"first_name":"Lori","last_name":"Alexander","email":"lalexanderx@google.com.au","gender":"Female","phone":"62-(180)729-4732"},
{"id":35,"first_name":"Donald","last_name":"Bennett","email":"dbennetty@eventbrite.com","gender":"Male","phone":"268-(537)777-8388"},
{"id":36,"first_name":"Sarah","last_name":"Cunningham","email":"scunninghamz@scientificamerican.com","gender":"Female","phone":"63-(558)671-3132"},
{"id":37,"first_name":"Melissa","last_name":"Medina","email":"mmedina10@domainmarket.com","gender":"Female","phone":"86-(698)370-3002"},
{"id":38,"first_name":"Gerald","last_name":"Morales","email":"gmorales11@mail.ru","gender":"Male","phone":"381-(228)430-6355"},
{"id":39,"first_name":"Paula","last_name":"Green","email":"pgreen12@about.com","gender":"Female","phone":"386-(951)751-1700"},
{"id":40,"first_name":"Joyce","last_name":"Green","email":"jgreen13@wufoo.com","gender":"Female","phone":"86-(936)465-1748"},
{"id":41,"first_name":"Ruth","last_name":"Powell","email":"rpowell14@hugedomains.com","gender":"Female","phone":"380-(928)413-9689"},
{"id":42,"first_name":"Russell","last_name":"Watkins","email":"rwatkins15@topsy.com","gender":"Male","phone":"86-(255)202-3931"},
{"id":43,"first_name":"Ronald","last_name":"Oliver","email":"roliver16@whitehouse.gov","gender":"Male","phone":"420-(753)220-3823"},
{"id":44,"first_name":"Amanda","last_name":"Spencer","email":"aspencer17@gnu.org","gender":"Female","phone":"46-(789)652-1923"},
{"id":45,"first_name":"Philip","last_name":"Boyd","email":"pboyd18@pbs.org","gender":"Male","phone":"962-(621)859-2371"},
{"id":46,"first_name":"Martha","last_name":"Warren","email":"mwarren19@virginia.edu","gender":"Female","phone":"62-(653)447-8145"},
{"id":47,"first_name":"Benjamin","last_name":"Morgan","email":"bmorgan1a@paginegialle.it","gender":"Male","phone":"62-(853)373-4970"},
{"id":48,"first_name":"Beverly","last_name":"King","email":"bking1b@com.com","gender":"Female","phone":"998-(395)543-4285"},
{"id":49,"first_name":"Jerry","last_name":"Miller","email":"jmiller1c@paginegialle.it","gender":"Male","phone":"216-(533)834-2805"},
{"id":50,"first_name":"Joyce","last_name":"Grant","email":"jgrant1d@mozilla.org","gender":"Female","phone":"47-(794)109-5528"}]`);
	for (var i = 0; i < data.length; i++) {
		var li = '<li value = "' + data[i].id + '">' + data[i].first_name + '</li>';
		$('#list').append(li);
	};
	$('li').on('click', function () {
		var index = $(this).val() - 1;
		var info = '';
		for (var key in data[index]) {
			info += key + ': ' + data[index][key] + '\n';
		}
		alert(info);
	});
});
/**
402. Remove K Digits

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

 */


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(_num, _k) {
    
    const helper = ( num, k ) => {
        // console.log( k, num )
        if ( k >= num.length ) {
            return "0";
        }
        
        let index = -1;
        
        // handle zero within 
        index = -1; // zero Index
        for ( let i = 0 ; i < k; i++ ) {
            if ( num[i] === '0' ) {
                index = i;
                break;
            }
        }
        if ( index >= 0 ) {
            // console.log( "handling 0" )
            num = num.substr(index);
            k = k - index;
            while ( num.length > 0 && num[0] === "0" ) {
                num = num.substr(1);
            }
            return helper( num, k );
        }
        
        // following greater and decrese
        // console.log("decrese")
        index = 0;
        while ( k > 0 && index < num.length-2 ) {
            if ( num[index] >= num[0] ) {
                if ( num[index] > num[index+1] ) {
                    num = num.substr( 0, index) + num.substr(index+1);
                    k--;
                    index = 0; // reset
                } else {
                    index++;
                }
            } else {
                break;
            }
        }
        
        // console.log("increse")
        let nextZero = num.length;
        for ( let i = 0; i < num.length; i++ ) {
            if ( num[i] === "0" ) {
                nextZero = i;
                break;
            }
        }
        while ( k > 0 ) {
            let maxIndex = 0;
            for ( let i = 0; i < nextZero ; i++ ) {
                if ( num[i] > num[maxIndex] ) {
                    maxIndex = i;
                }
            }
            num = num.substr( 0, maxIndex) + num.substr(maxIndex+1);
            k--;
            nextZero--;
        }
        
        while ( num.length > 0 && num[0] === "0" ) {
            num = num.substr(1);
        }
        return num.length === 0 ? "0" : num;
    }
    
    return helper( _num, _k );
};


/**

"1432219"
3
"14032219"
3
"1425291"
3
"1425291"
2
"123"
8
"10"
2
"10200"
1
"10200"
2
"112"
1
"48741610016"
6
"48741610016042692165669282207674747131355167179974"
6
"13272416829674548600712219000965861841896807411811"
9
"99641436378815361153471302158193420182863684789411484994976484827114595334610042544056442370530816060833617030976813134098793056155103202008549344446519354408307307071055065112738442020228471569394796174150323080161225901964338837341524253243218509500254619223683091799365677720582389568156585225666197123093377871100002481402486219837255411382162499321193416524972275273471969155848742457476556433737281147710021781210134765321761285612276511917324552585569882156635094670362653567596144728653795007023230933817566104488637696450166087905100823699425798763598444326069357052842379918535855296915760054459317433521878778171811081076593166663090948029793113626852462712388116483774713426183911481230884393594249331828165503798269634244430773693033882708000249632850148799859322024693146577635543114657662418998860517525989192973250701631765598465053097616804817344343895016724561947860836117504915797011185132674255278236597746042138768473723059825948301565719437610732907662545499042953499866813741157301003371005200992314265077531029437948931255617153417148822355928318598517533241719641002712204874161001604269216566928220767474713135516717997491363360204764154264989004671363541097433484822118483642107547658581450616821769964767032521138851570822729134762460014265433227201724724004338494552397280090568164786109721571436206198382814849033856987338787473335772666933218810822482848994610491705665155516384799459418594559136827941106387689501641851101743298582575466303864906673788496628288920867422193950180810131396612913851112593807649152972068279299934113463669714575613645929365652921808836725682390026075559320995704880149764583379697505303474550029059828116836469203370428449330442281563135568935742669243344218603994417955703485059862132359688776290378210392955310785874528205203788559715493852405991380290274268143557970398441851157977520689440430265144029789788511042795879174567381358510694749512938934687979305099149575464220629804942550564164786808856897809863824121659548034395539735407069279457678613909222371848892294754933299091164656871086269084324529512544747434123547189729993758337622038098699448815701644934651292719067683227727438808955969543542319197883567369733867364250353136697865107182282929655918362211832327827571354787535611501731943856155003853732339819594939524719169561110698571676562329360803282215467534058504728127731515598941143637827010955579092451405821352126706550438315176049692316210490899702613078702535716735901806171522853021035597316703390478571485677998207922773938829371460838611214446417528913575284776737837046439695408523434414916342979688820197836458637694991540998291690345194205452439239827382953039810367712244590155940394387554911786652478111954297185544106384174592451680875083737874735810068767866214924634885513828808880161930987276602570872860752119813042414550396358433893592777541756673206882876746731707766966268096104320061937913505893028833592137540396064375155513979764728180927083060481127522118240026140625647313783901073938419240249929000962722034273952683635919540169732220854978101308126446671885186032295490845060116567165945677975672981321362161949418405852378788584602802612398876874288293756055559457538271197205867506313677160755990736347314715042607243878693780144368083800080967842966193539823770427967091132770230485036143223363387876244958899577538069175123004651952588711287008791159682042581943812962882375293348462523257081140457567348612069746943329842264291823570671268374580651696311114624358304235261945894627668267192756606441264485628097480920062857007640396910214970556623416565940789636657349735150043836194242061994234044262604284350296258397208287158735477739515615890093167555389262170576609082365199242352356197706754361085079177223144662701424848070607319078068303190442737202186364818021792860690571733432439513976759807778513151206801184300729685910765785586373831699595178352610150383283823456881293647763022411686252640648120690251120902631370825525354213297549430441989419362406888242180413640397005462289002837178086683143441254722528075315187910994986929463063282350677644105312484770818851268755183086729904524488901102287310169865855725358976453628171038414004415469635124255044890245890050115901243603489384920067923087045070616429510114587493955384903357111302068595548921504222171096098548413208088831560744996899783844118318185694142620796984004522106434428513215881883542758888862576036415421097762413907290417004936441609238204617100586876487061497586106631983740139555573272626681186969272113315348553052708453716313010811194726904231406455432865684477036960953564406390115786323388585604716504384778912812410729908949581143722120318954849846535676912868526526501078193502393524062471534154104899815734648650035608611113327222040864146091286020205304970098510045582130989981665393076480660907742469107193219475618455618115516353495211289597815564506193368287178714208989206470099207227171770619580227427772058576958549342547850566371060314330889132466260972915500785842700966615103949831075688522846389635990078358138687466663099265099431775674237640711466272609872329090894406587154198409486434056948991642623725868520261081714501891452704954562834244485695899485150794033902595303371632597184940525684558272222395813587950566598836575728711404672894869851301199508345442816914540274231773573695049117433232750564343477296571911336451338765122801905492189124021699698020217831160061375249740348841211772476455089061870953510480256335713228323198782026742817220321247980121667780800877801219532811542139900480803615083739957513418528009253849655053312995534574307148952727627870318872325094411860749809155407484065987101730385346571248798467212335910821152286411077915790397497756477613051365987943518909759211252763081626026136209474490841118337332773116122063152414208776801671614382203998310801791046109980464795153775904284579208046765170299376571712696359391195309011046580945099118345329164807866461624513459858969478261348365746242842254100449074846018162381649508771205692387943049083877156128753239386498305599949138477358461424273464036997642435352074743094695564535693378173888280633866732018710701060752702258884562187458492514181027419045608607139753797741693225900923436163273291784047946102859573341135995351940672974945745062320931107916232460722010886651827074516009065280667168017782964663521168472263155891094369134584611694802620433621767214124173962636180142978128638945692419270222518432363382128100260544917455244318162619360808797214154001396840051520865249909119773623276044783996235484958441702533661095335337458603732924068113476544273220040621287278168707393471504842692312354782265568742305367773635557008065688109790648713350572351799924638273829816187626279342407486758617884199669669286080608957640162096427744397522103026413782698158732581790000716751490076906346484023835702438474105176931779065689980130347837155056303467742499515965713045957954225592059807462917282749105358673064716135765849677591608061323905019687616579401117839719269327243007586938365568212311638431283680946079388989080798521721770825311237382299640977231722390040018733060008726711369177955792504805871660952275133036361448257222162174106121886956846208577175900217031085260775753651365765038925717954695019720235653672968689019573262654460436772900765775615489257834882352941349073672575670561593061387879337673233294306479935031268311515186416299622966578517978675818927585118344348361158710756313053131716293124192982037977789379782122120656399498488608931743952536041546453299501041577456229618221253519224906611827751220393777623642577532653929191439603183004880021982807536023221789599010502125687724004685177438516674638976736887749480118357141229355178588718777866510629202733751110559334924038607709059709853979249569510212755627954315025008066453716096825677236680969921750877126730256949811077056975031686370565845816981036167892330455103497165407984322792515265566483796338273488042877728447328933645773410093062365682687268013318931065552717013674172822704288279197461978805944285413220284999303849740540429893025407810120053701999064303195562726870079068213843151094378846458471168159763363401468459072474435300433314015701363633705309153196187013664717617975618648227816754951474354742056233896619815305871556180590934191775446450232435064334173434855333465262160341517250209548644211312373841441024747539900101488865742679168673356769004244781832745045012713439497231232255815861738982590755401780194874615548229070120796893835181030047378827641086164272219294123942746140207443292075817414598536256892540490923602419336928186124051416665048479530882042184097629985897052425322145715174649893481917612568426372077919256931921063600255204010662044398922537796993713110889134889921360833579323314386803074533058134342770923839546994120322442157750203621967931319597649960815556196358566683782572730174920215034531104191490057838260392829741446722127017532444082857280503217574522928285094747407153894570747792487061998260753833304433675066923630595212677695003060727653119915126939127827754432456052655283764591328484359469704894122366077507922825301623961196207923544095047285011474898262448957681893278273601046641810135121516552187096005252171171905022763076761687166299014789581539855448453229411352775826042558462563147630238335355859149814380543807473386539264830261256996173935860136236427622918234260408201158550118527706241993700526213016072648406003487895118011337828945314863348154387066988573131543747121745028364818130265528614742576976975564213718421245904443000581698214695522541683926528961160986876871840844632069685227319014872180179370554032205521013345746425253133686231659075343389374580200717637698542920298315739628019867736462368334051114029380922339886663078026309916370486909128253195100898377068612057592121356555290537815049586626181680384845905180029133497372417653664436161971980137048236053329456957495141918670077299206755740534997886723627476115663811233372206043170460623060506091246306386543951687123557178508806912199010111871"
1000
"46900921143792939364743905907950430048283194895142016116725375680708410240152701078408134553651580164491932801308171825396210278622255397833294658953343807276028918394493791856095113449458295083153689258883783683775548328139495186195803711309448744190052686954103486010047267302647738396061446199596096906093158640242942067769230761708585639094504320596613786797994860240890299387445224817394531237806070669278580225674889375081404025436351818668368411467267112612516597194754941960565937596900371226287881328164833843729742259514509795321954787918013398424660697956114437767577585027801161881388768041873657013272416829674548600712219000965861841896807411811696914598183392164046305225248146398228574505936162527537984716023768908748335099200075916132949688475402252069567078211231605024929344378722114657821834717307274964255840723222095101219630080319167250637066967221314742878581159189819442427279476001316135735039114433778654900398513071617394641844114176128159380190644772098737920243508650625587861653796098197385614977428960880188485216800731470473242158382863997047515423091529580553304782874984247884344393401887541552242354733836150859650508291566416026373218892631491741002416280728017302638214800819207944420834804623709089464759914909362679524593759144026476799520704263914808345549710437518318582285217362461490954907378903645213467024882966816537188324075234675328991350200679327925942580565476546962009568167175780969440477068305390830644952856951615021788464984607710752774132484535611678970461816146548892465500908903863341160126029509337788654573484705475446571354525665464995686005369643015051403594737201252633746589565791879659941792504206762095533277105354037004844839981119815222326956264561553595324705124551113968698733829542539356972662374024132069824524718604667514482787361785517101892449890010058152868221006296857803998397066228812998722783403578157447630093221298772300332427652266384913264807824319995905639668920640920071145386181790364769931002095513621588119598809021507872503296820800567145036325577078354094815207062129549308685255816906171588639379392764277180770782807277154895660903841468363031268684031448351220067550266376002828401850338455491406999926852519826693509125765726269430249352244080903757146271662669991293077204503441808224071192461936512220865713295540302882327178779286355033361679226354202665747840201322423671598489693280232698835025937531610214399747097957718254214843516013567235522864417000379455965017240867730229825390567860693819996632303772825110319973393982361222145712444158451131921145168123771413898527834930572086613530814080311464291518450529782559509446748909946958976259123146047793434589223952698074923045407472188393500843619699097867641968009559911315121641754319437079094067556163546176249058599059665460825966748147681953266354541032679697938094907325933451500857921482751989260722896362598809175579591933784726692976987869502663790757355309861085051726265392208943150211143006158689561077058748504854644757581294818391231301459793351494286447784775357674328218268690404662285966054021806956486120931152478121966235300605547349093343068790227596862427753900090988363069291386243897852729302475120866155031618363701998690191222869002007372754140150710132308124242822580823834590356018704117259934150711285982652733109559783371308422916216030810411006215953862431664631267480598022359626694334779895263278935363366817393372043904923929598307532585839912358881737676667128182096063070827765762521331978014944067008707878422702981416309307528645513132017671328769132579634104170629097696285210394357035747469727031155813563158282241000040773928244845459654534023243250847666620809555276722233354145662582769799520396609692301180214491533710758558100538583202442316897714463679705834757905210759695156783560115795740058038820794183672928436782629993190280840727526164855133351254889729335424284636360099390796592183413922813313964555943046441752615578621085918504547763022167919764184682443169761827278377063462605153279149980079943220533841907345929555354649111405853801739445792044906593141055621823510062079761262301017795384281252954717793922268951491038045011054961893791583486636249658240497114427597743226025760030541165439470578783498810618235014375707032324516371946380238205791105008179545725972358062181813233612571597370902067196665115123485737658883344476954728851940160793728706541140357844375514940344218552600744742671679343950436042602547991669801495398012554167786935250736777686530531310113032016083607251343585029458393544901346647512266348733403489747191535967006165946105839523824820802709100482495039046383653044537627909195181455547244081734166714589865778920386168698671463933356147794367296834121054985259417690035917068748267188392860351404125414298376304320971992757229828861181704038158807679770369775599876082727991742225918069149854879045700163482564734691128716283172449145882748213807115921713885930768025297857818788967261076652544445991064147510637881781752232286658390770111654388011171556708011378098873211856434311914961243084948670229639471113805893546495352557366064291331572901807264818075266722990255329871422208641610540396603440898441251653407641617065622475084136534494371519678946281701220687058687950214214987403821909672582512034335810507398425645382939892161167148307290657917064838185135467914938789386290333326372556587624702797165920140051549047226266880604462848195529736013623101767084355253118229116109053823035514195610941204633575686733363948784333809424463430144361377160487652929675647806487028190640690496769721927612547835550896677863180966604873585029968019967618287242146979883137024354886612128862043050702175298430557020041706818308657031589346894069394015286389927042504088241010187640762314135780879023730540667478610365265716827518582272845726002300315364835515633148320195043044806150803525349659978432225825054355663569936058606481066943250978636996984989088375987454969892168289377451707909229309761135819562749637449569345606608558647315324558863897848528681453257639828732411588270354254567439351315643759652933400418597713462504251044803651825065996945612949445535145121001118377826460289187044603962337167354257225842626454230718993127345017903333618357976977035642030778793124325179931714352168195174524021346434430785128074965881185799595860724012672988800458177499236941213579892141711101768880217553287684995618785117347355500837281362901806978980328833348841035214606736520748425390530194118242862826047230502655104925774714633182738828527634301180349020705877440305926626741155318394778108920406448482075271551530561543465417990179219228286759304378532986856456637182716012742378196828440783958582382215338054896797166268252167063825218779445059714357994469207134460564455478794530433424670188526361276526860650708516355700464886771417245505320944767466192043390888757949871472785089698745778095207699868868788032812860255630556673960181981341805835941281529371112707566730825105065116458713710962367858200115127223322884599872759877115714746276869844043409312275666292046153098938367378855708384557545526642089734817974488462085824454425396910553208163409701462525326625280281692693110629855068037226829757703530381696425478474470274828181647421723037569156232697606796858050722096842939865605743501919537297866148012990962253425571707161215161598110712643098842874277222665331827222656772863620822066143841944147522095899618161746703672887075492473510410638268740961378471033730128509838380137613692009816472583299933886630128175080686789191492171470734426739508181403767123052642326041345317450915655524409083662404668905304341513628621948725536849789135931455636127567824726441361474222453190345803876825476458726601122578173574612359900378822212743705381513166694831138976165256445833827334682006371205354357586818607668270441795523029376088564374908540166783874827774860016234612024195556976317552256673987988101819422201249562013582352157687330621432296794243962836088698447933985897809815361091060848714786901236938903122172525888521875487974953329091062442930298390249777854910737476969733293687478681412329038332016286790122198362649693169646309217585932658372147729631415624603180422821558302176395026885417405666542011911588675258056141723004965600592002225238471914293508287567830679890363842690981331529470161039519826895194598624956115377330440563902037571699982840464647005713478717105507434876873508924856314843108932538222874053713611016446912271246191280056807052530131956795248002174329146840871557184492313624919113849498003551181986434185198720256187952878227102399721797513461344616786496767299388978961428815563313556725678458449359393280485852053619651738722333199759963594454625505784750139235453240600009834479783152091058874184991769341309902951393035438396822545341737445144118035821463845551463104573302769295685609468237303396626844486012200998554563065116289032437019156380362691299991325472183306859004915384286553176751373209790911054974395954864427418565269710517299844242914286311767609978539072799076376496937122222313715534352130759142706117736480645262832789196578310476031695761416670198393534604654430618933693088784932878420359208581324932972492446066997259870058620032275104918743347340562340792564025242407804956948929572219753895402814974972042803810361156769450813502861254043209940746660319238156927840680088531413884003652920613885566018517748725902173512065762385220087069151159308862019571002633093144477186038193820055516020434323705015314294804491281240509291924656245609443998445446119323046838482792833813526560296270971590728380579562142362781192779344430960323105741173878477628702417503287223358415926783794831799757710578006626514604229162218779662998255135299547912072152879064441137258604410101814404605577642009144179688407113974067239303080588292996177233428845368375030264252544698653395976157214589764241631426351588779902312609888545029586211369331053692630644932233511737970427766451137412323176660309810086889827799128210907747121257080703085060587318988678140767411182397073"
555


 */
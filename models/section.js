Section = MVC.Model.extend('section',
/* @Static */
{

    sections_tree: {
        'Bhagavad-gita_As_It_Is': {
            child: ['BG_Preface_and_Introduction', 'BG_Chapters_1_-_6', 'BG_Chapters_7_-_12', 'BG_Chapters_13_-_18'],
            name: 'BG'
        },

        'Srimad-Bhagavatam': {
            child: ['SB_Preface_and_Introduction', 'SB_Canto_1', 'SB_Canto_2', 'SB_Canto_3', 'SB_Canto_4', 'SB_Canto_5', 'SB_Canto_6', 'SB_Canto_7', 'SB_Canto_8', 'SB_Canto_9', 'SB_Canto_10.1_to_10.13', 'SB_Cantos_10.14_to_12_(Translations_Only)'],
            name: 'SB'
        },

        'Sri_Caitanya-caritamrta': {
            child: ['CC_Preface_and_Introduction', 'CC_Adi-lila', 'CC_Madhya-lila', 'CC_Antya-lila'],
            name: 'CC'
        },

        'Other_Books_by_Srila_Prabhupada': {
            child: ['Teachings_of_Lord_Caitanya', 'Nectar_of_Devotion', 'Nectar_of_Instruction', 'Easy_Journey_to_Other_Planets', 'Krsna,_The_Supreme_Personality_of_Godhead', 'Renunciation_Through_Wisdom', 'Message_of_Godhead', 'Light_of_the_Bhagavata', 'Sri_Isopanisad', 'Mukunda-mala-stotra_(mantras_1_to_6_only)', 'Narada-bhakti-sutra_(sutras_1_to_8_only)'],
            name: 'OB'
        },

        'Lectures': {
            child: ['Bhagavad-gita_As_It_Is_Lectures', 'Srimad-Bhagavatam_Lectures', 'Nectar_of_Devotion_Lectures', 'Sri_Caitanya-caritamrta_Lectures', 'Sri_Isopanisad_Lectures', 'Sri_Brahma-samhita_Lectures', 'Festival_Lectures', 'Arrival_Addresses_and_Talks', 'Initiation_Lectures', 'Cornerstone_Ceremonies', 'Wedding_Ceremonies', 'General_Lectures', 'Departure_Talks', 'Philosophy_Discussions', 'Purports_to_Songs'],
            name: 'Lec'
        },

        'Conversations_and_Morning_Walks': {
            child: ['1967_Conversations_and_Morning_Walks', '1968_Conversations_and_Morning_Walks', '1969_Conversations_and_Morning_Walks', '1970_Conversations_and_Morning_Walks', '1971_Conversations_and_Morning_Walks', '1972_Conversations_and_Morning_Walks', '1973_Conversations_and_Morning_Walks', '1974_Conversations_and_Morning_Walks', '1975_Conversations_and_Morning_Walks', '1976_Conversations_and_Morning_Walks', '1977_Conversations_and_Morning_Walks'],
            name: 'Con'
        },

        'Correspondence': {
            child: ['1947_to_1965_Correspondence', '1966_Correspondence', '1967_Correspondence', '1968_Correspondence', '1969_Correspondence', '1970_Correspondence', '1971_Correspondence', '1972_Correspondence', '1973_Correspondence', '1974_Correspondence', '1975_Correspondence', '1976_Correspondence', '1977_Correspondence'],
            name: 'Let'
        }

    },

    exists: function(section) {
        if (window.console) {
            console.log('Section#exists: checking TOC ' + section);
        }
        return this.find_attr(section) ? true: false;
    },

    /**
	 * find_attr @params
	 * ref: is a reference string to the section we are working on or creating
	 */
    find_attr: function(ref, what) {
        if (!ref || ref === 'undefined' || ref === '') {
            if (window.console) {
                console.error('Error in Section#find_attr for ref: ' + ref + ' attr: ' + what);
            }
            return;
        }
        var sec_parent, sec_class, sec_level, sec_index, sec_book, ms_i, sub_index, all, that;
        that = this;

        // Check if this section is a main Book section
        ms_i = 0;
        for (var main in that.sections_tree) {
            if (ref === main) {
                sec_parent = 'compilation';
                sec_class = 'section';
                sec_level = 2;
                sec_index = ms_i;
                sec_book = that.sections_tree[main].name;
                break;
            }
            ms_i++;
        }

        // if sec_parents still undefined loop through each array inside each main section
        if (sec_parent === undefined) {
            for (var section in that.sections_tree) {
                sec_index = $.inArray(ref, that.sections_tree[section].child);
                if (sec_index > -1) {
                    sec_parent = section;
                    sec_class = 'sub_section';
                    sec_level = 3;
                    sec_book = that.sections_tree[section].name;
                    break;
                }
                sec_index = false;
            }
        }
        if (sec_parent) {
            all = {
                sec_parent: sec_parent,
                sec_class: sec_class,
                sec_index: sec_index,
                sec_level: sec_level,
                sec_book: sec_book
            };
            return what !== undefined ? all[what] : all;
        } else {
            return false;
        }

    } // End of _set_section_and_class
},
/* @Prototype */
{
    init: function(ref) {
        var new_section;
        if (ref === undefined || ref === '') {
            if (window.console) {
                console.log('Error in Section.init creating new section with ref: ' + ref);
            }
            return;
        }
        if (typeof ref !== 'string') {
            // if attr present already use _set_attr_auto else use _set_attr_man
            new_section = $(ref).attr('parent') && $(ref).attr('class') && $(ref).attr('sec_index') ? this._set_attr_auto(ref) : this._set_attr_man($(ref).attr('id'));
        } else {
            new_section = this._set_attr_man(ref);
        }
        if (window.console) {
            console.log('Section.init: new section:');
            //console.dir(this);
        }
        if (new_section) {
            this.publish('created', this);
        } else {
            if (window.console) {
                console.error('Section.init: Error building section for ref ' + ref);
																return;
            }
        }
    },
    _set_attr_auto: function(ref) {
        if (window.console) {
            console.log('Section.init#_set_attr_auto: Building section ' + ref + ' auto');
        }
        this.parent = $(ref).attr('parent');
        this.sec_class = $(ref).attr('class');
        this.level = this.sec_class === "section" ? 2 : 3;
        this.sec_index = $(ref).attr('sec_index');
        this.id = $(ref).attr('id');
        this.text = this.id.replace(/_/g, ' ');
        return true;
    },
    _set_attr_man: function(ref) {
        if (window.console) {
            console.log('Section.init#_set_attr_man: Building section ' + ref + ' manually');
        }
        if (ref === undefined) {
            if (window.console) {
                console.error('Section.init#_set_attr_man: Missing ref ' + ref);
            }
            return false;
        }
        var attr;
        attr = this.Class.find_attr(ref);
        if (!attr) {
            if (window.console) {
                console.log('Section.init#_set_attr_man: section/TOC item not found in Section#section_tree for ref ' + ref);
            }
            return false;
        }
        this.parent = attr.sec_parent;
        this.sec_class = attr.sec_class;
        this.level = attr.sec_level;
        this.sec_index = attr.sec_index;
        this.id = ref;
        this.text = ref.replace(/_/g, ' ');
        return true;
    }
});
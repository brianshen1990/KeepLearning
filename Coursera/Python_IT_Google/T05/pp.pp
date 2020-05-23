node default {
    class sudo {
    package { 'sudo':
      ensure => present,
    }
  }
}
# site.pp usually
node FQDN {
  class { 'apache'; }
}

class sysctl {
  file { '/etc/sysctl.d':
    ensure => directory,
  }
}
class ntp {
  package { 'ntp':
    ensure => lastest,
  }
  file { '/etc/ntp.conf':
    source => 'puppet:///modules/ntp/ntp/conf',
    replace => true,
  }
  service { "ntp":
    enable => true,
    ensure => running,
  }
}


# class #classname# {
#   #resource# { '#name#:
#     ensure => directory,
#   }
# }


###########################

if $facts['is_virtual'] {
  # ...
} else {
  # ...
}


#######
describe 'gksu', :type => :class
  let (:fact) { { 'is_virtual' => 'false' } }
  it { should contain_package('gksu').with_ensure('latest') }
end

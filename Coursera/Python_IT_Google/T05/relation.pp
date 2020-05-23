include ::apache
class ntp {
  package { 'ntp':
    ensure => lastest,
  }
  file { '/etc/ntp.conf':
    source => 'puppet:///modules/ntp/ntp/conf',
    replace => true,
    require => Package['ntp'],
    notify => Service['ntp'],
  }
  service { "ntp":
    enable => true,
    ensure => running,
    require => File['/etc/ntp.conf'],
  }
}



